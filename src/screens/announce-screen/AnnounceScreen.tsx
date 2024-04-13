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
import {TOKEN_ID} from '@env';

interface DataItem {
  data: {
    id: any | '';
    attributes: {
      title: string;
      description: string;
      price: number | '';
      // createdAt: string;
      // updatedAt: string;
      // publishedAt: string;
      // locale: string;
    };
  };
}

export default function AnnounceScreen() {
  const [title, setTitle] = useState<DataItem | any>('');
  const [description, setDescription] = useState<DataItem | any>('');
  const [price, setPrice] = useState<DataItem | any>();

  //Save data of api strapi
  const [data, setData] = useState<DataItem[] | ''>([]);

  const url = 'http://192.168.0.107:1337';

  const HandleRegister = async () => {
    try {
      // Definir os dados a serem enviados
      const announceData: DataItem = {
        data: {
          attributes: {
            title: title,
            description: description,
            price: price,
          },
          id: '',
        },
      };

      // Fazer a requisição usando a Fetch API
      function response(url: any, {arg}: any) {
        return fetch(`${url}/api/products`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Indicar que o corpo da requisição é um JSON
            // Se necessário, adicione token de autorização
            // 'Authorization': `Bearer ${TOKEN_ID}`
          },
          body: JSON.stringify({data: {...arg}}), // Converter o objeto JavaScript para uma string JSON
        });
      }
      // const response = await fetch(`${url}/api/products`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json', // Indicar que o corpo da requisição é um JSON
      //     // Se necessário, adicione token de autorização
      //     // 'Authorization': `Bearer ${TOKEN_ID}`
      //   },
      //   body: JSON.stringify({...announceData}), // Converter o objeto JavaScript para uma string JSON
      // });

      // if (!response.ok) {
      //   const errorMessage = await response.text(); // Extrair mensagem de erro do corpo da resposta
      //   console.error(
      //     'Erro ao cadastrar os dados:',
      //     response.status,
      //     errorMessage,
      //   );
      //   return; // Encerrar a execução da função se a resposta não for OK
      // }
      console.log('Dados cadastrados com sucesso:', data);
      setData(data);
      // Realizar qualquer ação adicional necessária após o cadastro bem-sucedido
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
      // Tratar outros erros, se necessário
    }
  };

  const handleInputChange = (text: any) => {
    // Remove caracteres não numéricos
    const numericValue = text.replace(/[^0-9]/g, '');
    setPrice(numericValue);
  };

  useEffect(() => {
    // fetchData();
  }, []);

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
