import React, {useEffect, useState} from 'react';
import {
  AnnounceSafeAreaView,
  TaskNavBar,
  HeaderText,
  FormInput,
  FormField,
  ButtonSubmit,
  ButtonText,
} from './styles';

import auth from '@react-native-firebase/auth';

import {KeyboardAvoidingView, TextInput, ToastAndroid} from 'react-native';

export default function AnnounceScreen() {
  const [nameProduct, setNameProduct] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const HandleRegister = async () => {
    try {
      // Verifica se existe um usuário autenticado
      const userId = auth().currentUser;
      const username = auth().currentUser?.displayName;
      if (!userId) {
        throw new Error('Usuário não autenticado');
      }

      // Obtém o UID do usuário autenticado
      const uid = userId.uid;
      const user = username;

      // Cria o objeto do produto com o UID do usuário
      const product = {
        nameProduct,
        description,
        price,
        idUser: uid,
        username: user, // Use diretamente o UID obtido
      };

      const response = await fetch('http://192.168.0.107:8080/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto');
      }

      const data = await response.json();
      ToastAndroid.show('Produto cadastrado', 2);
      console.info('Produto cadastrado', data);
    } catch (error) {
      ToastAndroid.show('Erro ao cadastrar produto', 2);
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  const handleInputChange = (text: string) => {
    // Remove caracteres não numéricos
    const numericValue = text.replace(/[^0-9]/g, '.');
    setPrice(numericValue);
  };

  return (
    <AnnounceSafeAreaView>
      <TaskNavBar>
        <HeaderText>Anunciar</HeaderText>
      </TaskNavBar>
      <KeyboardAvoidingView>
        <FormField>
          <FormInput>
            <TextInput
              placeholder="Titulo"
              onChangeText={setNameProduct}
              value={nameProduct}
            />
          </FormInput>
          <FormInput>
            <TextInput
              placeholder="Descrição"
              onChangeText={setDescription}
              value={description}
            />
          </FormInput>
          <FormInput>
            <TextInput
              keyboardType="numeric"
              value={price}
              placeholder="Valor"
              onChangeText={handleInputChange}
            />
          </FormInput>
          <ButtonSubmit id="HandleSubmit" onPress={HandleRegister}>
            <ButtonText>Anunciar</ButtonText>
          </ButtonSubmit>
        </FormField>
      </KeyboardAvoidingView>
    </AnnounceSafeAreaView>
  );
}
