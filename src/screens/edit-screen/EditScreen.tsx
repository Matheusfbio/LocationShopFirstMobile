import React, {useEffect, useState} from 'react';
import {
  AnnounceSafeAreaView,
  ButtonSubmit,
  ButtonText,
  FormField,
  FormInput,
} from './styles';

import {
  Alert,
  FlatList,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Products {
  id?: string;
  nameProduct: string;
  description: string;
  price: string;
  idUser: string;
  username: string;
}

export default function EditScreen() {
  const [products, setProducts] = useState<Products[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Products | null>(null);
  const [updatePrice, setUpdatePrice] = useState<string>('');

  useEffect(() => {
    fetch('http://192.168.0.107:8080/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Erro ao buscar os produtos:', error);
      });
  }, []);

  // async function getProduct() {
  //   const data = await fetch('http://192.168.0.107:8080/products', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   return data;
  // }

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://192.168.0.107:8080/products', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }

  //     const responseData = await response.json();
  //     setData(responseData);
  //     console.info(responseData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // const handleProductSelect = (productId: string) => {
  //   // Substitua pela URL da sua API para buscar um produto específico
  //   fetch(`http://192.168.0.107:8080/products/${productId}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setSelectedProduct(data);
  //     })
  //     .catch(error => {
  //       console.error('Erro ao buscar o produto:', error);
  //     });
  // };

  const HandleUpdateProduct = () => {
    if (selectedProduct) {
      // Substitua pela URL da sua API para atualizar o produto
      fetch(`http://192.168.0.107:8080/produto/${selectedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedProduct),
      })
        .then(response => {
          if (response.ok) {
            Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
          } else {
            throw new Error('Erro ao atualizar o produto.');
          }
        })
        .catch(error => {
          console.error('Erro ao atualizar o produto:', error);
          Alert.alert('Erro', 'Erro ao atualizar o produto.');
        });
    }
  };

  const handleInputChange = (field: keyof Products, value: string) => {
    if (selectedProduct) {
      setSelectedProduct({...selectedProduct, [field]: value});
    }
    // Remove caracteres não numéricos
    const numericValue = value.replace(/[^0-9]/g, '.');
    setUpdatePrice(numericValue);
  };

  const handleProductSelect = (productId: string) => {
    // Substitua pela URL da sua API para buscar um produto específico
    fetch(`http://192.168.0.107:8080/produto/${productId}`)
      .then(response => response.json())
      .then(data => {
        setSelectedProduct(data);
      })
      .catch(error => {
        console.error('Erro ao buscar o produto:', error);
      });
  };

  return (
    <AnnounceSafeAreaView>
      {selectedProduct ? (
        <KeyboardAvoidingView>
          <FormField>
            <FormInput>
              <TextInput
                placeholder="Nome do produto"
                onChangeText={value => handleInputChange('nameProduct', value)}
                value={selectedProduct?.nameProduct}
              />
            </FormInput>
            <FormInput>
              <TextInput
                placeholder="Descrição"
                onChangeText={value => handleInputChange('description', value)}
                value={selectedProduct.description}
              />
            </FormInput>
            <FormInput>
              <TextInput
                keyboardType="numeric"
                onChangeText={value => handleInputChange('price', value)}
                placeholder="Valor"
                value={selectedProduct.price}
              />
            </FormInput>
            <ButtonSubmit id="HandleSubmit" onPress={HandleUpdateProduct}>
              <ButtonText>Salvar</ButtonText>
            </ButtonSubmit>
          </FormField>
        </KeyboardAvoidingView>
      ) : (
        <FlatList
          data={products}
          // keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleProductSelect(item.id)}>
              <View>
                <Text>{item.nameProduct}</Text>
                <Text>{item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </AnnounceSafeAreaView>
  );
}
