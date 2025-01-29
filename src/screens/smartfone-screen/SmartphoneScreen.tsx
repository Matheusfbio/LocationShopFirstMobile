import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {
  ChangeProduct,
  ContainerOffileProduct,
  ContainerProduct,
  Content,
  SmartFoneSafeAreaView,
} from './styles';
import {Products} from '../../interfaces/Products';
import axios from 'axios';

type StackTypes = {
  navigate: (screen: string, params?: {productId: string}) => void;
};

export default function SmartPhoneScreen() {
  const [products, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const navigation = useNavigation<StackTypes>();

  const showToastWithGravity = () => {
    ToastAndroid.show('deletado com sucesso', 3);
  };

  const handleDeleteProduct = useCallback((id: string) => {
    axios
      .delete(`http://192.168.0.107:8080/products/${id}`)
      .then(response => {
        setProducts(prevProducts =>
          prevProducts.filter(product => product.id !== id),
        );
        showToastWithGravity();
        console.log('Produto deletado com sucesso:', response.data);
      })
      .catch(error => {
        console.error(
          'Erro ao deletar produto:',
          error.response?.data || error,
        );
      });
  }, []);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://192.168.0.107:8080/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchData();
    console.log(...products);
    setIsRefreshing(false);
  }, [fetchData]);

  const handleEditPress = (productId: string) => {
    navigation.navigate('Edit', {productId});
  };

  return (
    <SmartFoneSafeAreaView>
      <Content>
        {isLoading ? (
          <ContainerOffileProduct>
            <ActivityIndicator size="large" />
          </ContainerOffileProduct>
        ) : products.length > 0 ? (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }>
            {products.length > 0 ? (
              products.map(item => (
                <ContainerProduct
                  key={item.id || Math.random().toString()}
                  style={{marginBottom: 10}}>
                  <Image source={require('./img/smartphone_icon.png')} />
                  <Text>{item.nameProduct}</Text>
                  <Text>{item.description}</Text>
                  <Text>{item.price}</Text>
                  <ChangeProduct>
                    <TouchableOpacity
                      onPress={() => handleDeleteProduct(item.id!)}
                      key={item.id}>
                      <Feather name="trash" size={25} />
                    </TouchableOpacity>
                    {item.id && (
                      <TouchableOpacity
                        onPress={() => handleEditPress(item.id!)}>
                        <Feather name="edit" size={25} />
                      </TouchableOpacity>
                    )}
                  </ChangeProduct>
                </ContainerProduct>
              ))
            ) : (
              <ContainerOffileProduct>
                <ActivityIndicator size="large" />
              </ContainerOffileProduct>
            )}
          </ScrollView>
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }>
            <ContainerOffileProduct>
              <Text>Nenhum produto encontrado</Text>
            </ContainerOffileProduct>
          </ScrollView>
        )}
      </Content>
    </SmartFoneSafeAreaView>
  );
}
