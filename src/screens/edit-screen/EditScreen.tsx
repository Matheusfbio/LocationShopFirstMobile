import React, {useEffect, useState} from 'react';
import {
  AnnounceSafeAreaView,
  ButtonSubmit,
  ButtonText,
  FormField,
  FormInput,
} from './styles';

import axios from 'axios';

import {KeyboardAvoidingView, TextInput} from 'react-native';
import {Products} from '../../interfaces/Products';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

// Definição do tipo dos parâmetros da navegação
type RootStackParamList = {
  Edit: {productId: string};
};

// Tipagem do route para a tela de edição
type EditProductScreenRouteProp = RouteProp<RootStackParamList, 'Edit'>;

export default function EditScreen() {
  const route = useRoute<EditProductScreenRouteProp>();
  const {productId} = route.params;
  const [productData, setProductData] = useState<Products | null>(null);

  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get<Products>(`http://192.168.0.107:8080/products/${productId}`)
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
        console.error(
          'Error fetching product data:',
          error.response?.data || error.message || error,
        );
      });
  }, [productId]);

  const handleUpdateProduct = () => {
    if (!productData) {
      console.error(
        'Produto não encontrado, não é possível atualizar o produto',
      );
      return;
    }

    axios
      .put(`http://192.168.0.107:8080/products/${productData.id}`, productData)
      .then(response => {
        console.log('Produto atualizado com sucesso:', response.data);
        navigation.goBack();
      })
      .catch(error => {
        console.error(
          'Erro ao atualizar produto:',
          error.response?.data || error.message || error,
        );
      });
  };

  const handleInputChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, '.');
    setProductData(prevData => ({
      ...prevData!,
      price: numericValue,
    }));
  };

  return (
    <AnnounceSafeAreaView>
      <KeyboardAvoidingView>
        <FormField>
          {productData && (
            <>
              <FormInput>
                <TextInput
                  placeholder="Nome"
                  onChangeText={text =>
                    setProductData(prevData => ({
                      ...prevData!,
                      nameProduct: text,
                    }))
                  }
                  value={productData.nameProduct}
                />
              </FormInput>
              <FormInput>
                <TextInput
                  placeholder="Descrição"
                  onChangeText={text =>
                    setProductData(prevData => ({
                      ...prevData!,
                      description: text,
                    }))
                  }
                  value={productData.description}
                />
              </FormInput>
              <FormInput>
                <TextInput
                  keyboardType="numeric"
                  onChangeText={handleInputChange}
                  placeholder="Valor"
                  value={productData.price}
                />
              </FormInput>
              <ButtonSubmit id="HandleSubmit" onPress={handleUpdateProduct}>
                <ButtonText>Salvar</ButtonText>
              </ButtonSubmit>
            </>
          )}
        </FormField>
      </KeyboardAvoidingView>
    </AnnounceSafeAreaView>
  );
}
