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
import {KeyboardAvoidingView, TextInput} from 'react-native';

export default function AnnounceScreen() {
  const [nameProduct, setNameProduct] = useState<string | any>('');
  const [description, setDescription] = useState<string | any>('');
  const [price, setPrice] = useState<string | any>();

  const HandleRegister = async () => {
    try {
      const produto = {
        nameProduct,
        description,
        price,
      };

      const response = await fetch('http://192.168.0.107:8080/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar produto');
      }

      const data = await response.json();
      console.log('Produto cadastrado com sucesso:', data);
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  const handleInputChange = (text: any) => {
    // Remove caracteres não numéricos
    const numericValue = text.replace(/[^0-9]/g, '');
    setPrice(numericValue);
  };

  // useEffect(() => {
  //   // fetchData();
  // }, []);

  // Call the data of Api
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`${url}/api/products`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }

  //     const responseData = await response.json();
  //     setData(responseData.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

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
          <ButtonSubmit onPress={HandleRegister}>
            <ButtonText>Anunciar</ButtonText>
          </ButtonSubmit>
        </FormField>
      </KeyboardAvoidingView>
      {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {data.length > 0 ? (
          data.map((item: DataItem) => (
            <View key={item.id}>
              <Text>Descrição: {item.attributes.description}</Text>
              <Text>Título: {item.attributes.title}</Text>
              <Text>Valor: {item.attributes.price}</Text>
            </View>
          ))
        ) : (
          <Text>Nenhum dado disponível</Text>
        )}
      </View> */}
    </AnnounceSafeAreaView>
  );
}
