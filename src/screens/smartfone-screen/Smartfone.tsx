import {SmartFoneSafeAreaView} from './styles';
import {Text, View} from 'react-native';
import {useEffect, useState} from 'react';

interface SmartFone {
  nameProduct: string;
  description: string;
  price: string;
  idUser: string;
  username: string;
}

export default function SmartFoneScreen() {
  const [data, setData] = useState<SmartFone[]>([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // Busca os dados a cada 5 segundos
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
        throw new Error('Failed to fetch data');
      }

      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <SmartFoneSafeAreaView>
      <Text>Smatfone</Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {data.map(datas => (
          <View
            key={`${datas.idUser}-${datas.nameProduct}`}
            style={{marginBottom: 10}}>
            <Text>{`Name: ${datas.nameProduct}`}</Text>
            <Text>{`Descrição: ${datas.description}`}</Text>
            <Text>{`Email: ${datas.price}`}</Text>
            <Text>{`Usuario: ${datas.username}`}</Text>
          </View>
        ))}
      </View>
    </SmartFoneSafeAreaView>
  );
}
