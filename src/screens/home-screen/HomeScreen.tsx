import {
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  ContainerFlatList,
  HomeContainer,
  HomeSafeAreaView,
  LocationInfo,
  LocationText,
  SearchInput,
  ShowFlatList,
  ShowFlatListText,
} from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes/announce.routes';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<StackTypes>();

  return (
    <HomeSafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <HomeContainer>
        <SearchInput>
          <TextInput
            value={search}
            placeholder="Buscar"
            onChangeText={setSearch}
          />
        </SearchInput>
      </HomeContainer>
      <LocationInfo>
        <Ionicons name="location-outline" color="black" size={20} />
        <LocationText>DDD 83 - Paraiba</LocationText>
      </LocationInfo>
      <ScrollView>
        <ShowFlatList>
          <TouchableOpacity onPress={() => navigation.navigate('Smartphones')}>
            <ContainerFlatList>
              <Image source={require('./img/smartphone_icon.png')} />
              <ShowFlatListText>Smartphone</ShowFlatListText>
            </ContainerFlatList>
          </TouchableOpacity>
        </ShowFlatList>
      </ScrollView>
    </HomeSafeAreaView>
  );
}
