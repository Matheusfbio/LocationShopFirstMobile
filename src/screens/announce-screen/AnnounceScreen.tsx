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
import {KeyboardAvoidingView, Text, TextInput, View} from 'react-native';

interface DataItem {
  id: number;
  attributes: {
    description: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    price: number | null;
  };
}

export default function AnnounceScreen() {
  const [title, setTitle] = useState<DataItem | any>('');
  const [description, setDescription] = useState<DataItem | any>('');
  const [price, setPrice] = useState<DataItem | any>();
  //Save data of api strapi
  const [data, setData] = useState<DataItem[]>([]);

  const url = 'http://192.168.0.107:1337';

  const token =
    'b6c4322b17a72a17de2b2f2f1d9bdfa71660af8d8cf73de2d165fe09c257ad4d3e55b3cf596fcf62802a7fdfa5cbf4d77b110869f22af894f126fb7abd74b37ea611d7c844cf0d24619f9cc590cdd37c1ec31ed358cb9425d90076f594a028d62f6d76421058f0a923881eb6d28b29719d339f8cc55f80c88ad85b25637205c4';

  const handleInputChange = (text: any) => {
    // Remove caracteres não numéricos
    const numericValue = text.replace(/[^0-9]/g, '');
    setPrice(numericValue);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // Call the data of Api
  const fetchData = async () => {
    try {
      const response = await fetch(`${url}/api/products`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const HandleRegister = async () => {
    const AnnounceData = {
      data: [
        {
          id: null, // Como este é um novo item, o ID pode ser null
          attributes: {
            title: title,
            description: description,
            price: price,
          },
        },
      ],
    };
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
              onChangeText={setTitle}
              value={title}
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
      </View>
    </AnnounceSafeAreaView>
  );
}
