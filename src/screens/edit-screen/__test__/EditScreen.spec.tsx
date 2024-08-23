import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import EditScreen from '../EditScreen';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {NavigationContainer} from '@react-navigation/native';

// Configurando o mock do axios
const mockAxios = new MockAdapter(axios);

describe('EditScreen', () => {
  const mockProduct = {
    id: '1',
    nameProduct: 'Produto Teste',
    description: 'Descrição Teste',
    price: '100',
  };

  beforeEach(() => {
    mockAxios.reset();
  });

  it('deve renderizar os dados do produto corretamente', async () => {
    mockAxios
      .onGet('http://192.168.0.107:8080/products/1')
      .reply(200, mockProduct);

    // const route = {params: {productId: '1'}};
    const {getByPlaceholderText} = render(
      <NavigationContainer>
        <EditScreen />
      </NavigationContainer>,
    );

    await waitFor(() => {
      expect(getByPlaceholderText('Nome').props.value).toBe('Produto Teste');
      expect(getByPlaceholderText('Descrição').props.value).toBe(
        'Descrição Teste',
      );
      expect(getByPlaceholderText('Valor').props.value).toBe('100');
    });
  });

  it('deve atualizar o produto quando o botão Salvar é pressionado', async () => {
    mockAxios
      .onGet('http://192.168.0.107:8080/products/1')
      .reply(200, mockProduct);
    mockAxios.onPatch('http://192.168.0.107:8080/products/1').reply(200);

    const route = {params: {productId: '1'}};
    const navigation = {goBack: jest.fn()};
    const {getByPlaceholderText, getByText} = render(
      <NavigationContainer>
        <EditScreen route={route} navigation={navigation} />
      </NavigationContainer>,
    );

    await waitFor(() => {
      fireEvent.changeText(getByPlaceholderText('Nome'), 'Produto Atualizado');
      fireEvent.press(getByText('Salvar'));
    });

    await waitFor(() => {
      expect(mockAxios.history.patch.length).toBe(1);
      expect(mockAxios.history.patch[0].data).toEqual(
        JSON.stringify({
          ...mockProduct,
          nameProduct: 'Produto Atualizado',
        }),
      );
      expect(navigation.goBack).toHaveBeenCalled();
    });
  });

  it('deve exibir erro ao tentar atualizar produto inexistente', async () => {
    mockAxios.onGet('http://192.168.0.107:8080/products/1').reply(200, null);

    const route = {params: {productId: '1'}};
    const {getByText} = render(
      <NavigationContainer>
        <EditScreen route={route} />
      </NavigationContainer>,
    );

    await waitFor(() => {
      fireEvent.press(getByText('Salvar'));
    });

    // Verifica se o erro foi registrado no console
    expect(console.error).toHaveBeenCalledWith(
      'Produto não encontrado, não é possível atualizar o produto',
    );
  });
});
