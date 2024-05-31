import {Container, SmartFoneSafeAreaView} from './styles';
import {Text, TextComponent, View} from 'react-native';
import {useEffect, useState} from 'react';

interface SmartFone {
  nameProduct: string;
  description: string;
  price: string;
  idUser: string;
  username: string;
}

export default function SmartPhoneScreen() {
  const [data, setData] = useState<SmartFone[]>([]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 20000); // Busca os dados a cada 5 segundos
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
      <View>
        {data.length > 0 ? (
          data.map(datas => (
            <Container key={datas.nameProduct} style={{marginBottom: 10}}>
              <Text>{`Name: ${datas.nameProduct}`}</Text>
              <Text>{`Descrição: ${datas.description}`}</Text>
              <Text>{`Valor: ${datas.price}`}</Text>
              <Text>{`Usuario: ${datas.username}`}</Text>
            </Container>
          ))
        ) : (
          <Text>Não há dados disponíveis</Text>
        )}
      </View>
    </SmartFoneSafeAreaView>
  );
}
