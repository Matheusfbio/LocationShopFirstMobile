import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
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
import {FlatList} from 'react-native-gesture-handler';

type StackTypes = {
  navigate: (screen: string, params?: {productId: string}) => void; // o que isso retorna
};

export default function SmartPhoneScreen() {
  const [product, setProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<StackTypes>();

  const showToastWithGravity = () => {
    ToastAndroid.show('Em breve', 3);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 20000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://192.168.0.107:8080/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const responseData = await response.json();
      setProducts(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
        ) : product.length > 0 ? (
          <FlatList
            data={product}
            keyExtractor={item => item.id || Math.random().toString()}
            renderItem={({item}) => (
              <ContainerProduct style={{marginBottom: 10}}>
                <Image source={require('./img/smartphone_icon.png')} />
                <Text>{item.id}</Text>
                <Text>{item.nameProduct}</Text>
                <Text>{item.description}</Text>
                <Text>{item.price}</Text>
                <ChangeProduct>
                  <TouchableOpacity onPress={showToastWithGravity}>
                    <Feather name="trash" size={25} />
                  </TouchableOpacity>
                  {item.id && (
                    <TouchableOpacity onPress={() => handleEditPress(item.id!)}>
                      <Feather name="edit" size={25} />
                    </TouchableOpacity>
                  )}
                </ChangeProduct>
              </ContainerProduct>
            )}
          />
        ) : (
          <ContainerOffileProduct>
            <Text>Nenhum produto encontrado</Text>
          </ContainerOffileProduct>
        )}
      </Content>
    </SmartFoneSafeAreaView>
  );
}
