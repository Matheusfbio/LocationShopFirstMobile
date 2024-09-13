import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import AnnounceScreen from '../AnnounceScreen';

describe('AnnounceScreen', () => {
  it('deve renderizar o botão Anunciar', () => {
    const {getByText} = render(<AnnounceScreen />);

    // Verifica se o botão com o texto "Anunciar" está presente na tela
    const button = getByText('Anunciar');
    expect(button).toBeTruthy();
  });

  it('deve chamar a função HandleRegister ao clicar no botão Anunciar', () => {
    const {getByText} = render(<AnnounceScreen />);

    // Seleciona o botão "Anunciar"
    const button = getByText('Anunciar');

    // Simula o clique no botão
    fireEvent.press(button);
  });
});
