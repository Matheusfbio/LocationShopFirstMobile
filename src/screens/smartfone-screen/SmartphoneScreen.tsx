import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {StackTypes} from '../../routes/announce.routes';
import {
  ChangeProduct,
  ContainerOffileProduct,
  ContainerProduct,
  Content,
  SmartFoneSafeAreaView,
} from './styles';
import {Products} from '../../interfaces/Products';

export default function SmartPhoneScreen() {
  const [data, setData] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<StackTypes>();

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 20000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.0.107:8080/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        setIsLoading(isLoading);
        throw new Error('Failed to fetch data');
      }

      const responseData = await response.json();
      setData(responseData);
      console.info(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <SmartFoneSafeAreaView>
      <Content>
        {data.length > 0 ? (
          data.map(datas => (
            <ContainerProduct
              key={datas.nameProduct}
              style={{marginBottom: 10}}>
              <Image source={require('./img/smartphone_icon.png')} />
              <Text>{datas.nameProduct}</Text>
              <Text>{datas.description}</Text>
              <Text>{datas.price}</Text>
              <ChangeProduct>
                <TouchableOpacity>
                  <Feather name="trash" size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                  <Feather name="edit" size={25} />
                </TouchableOpacity>
              </ChangeProduct>
            </ContainerProduct>
          ))
        ) : (
          <ContainerOffileProduct>
            <ActivityIndicator size="large" />
          </ContainerOffileProduct>
        )}
      </Content>
    </SmartFoneSafeAreaView>
  );
}
