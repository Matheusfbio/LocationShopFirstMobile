import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  ContainerFlatList,
  HeaderText,
  HomeContainer,
  HomeNavBarIcon,
  HomeSafeAreaView,
  LocationInfo,
  LocationText,
  SearchInput,
  ShowFlatList,
  ShowFlatListText,
} from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Avatar from '../../Components/avatar/avatar';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes/announce.routes';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<StackTypes>();

  return (
    <HomeSafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {/* <HeaderText>Location Shop</HeaderText> */}
      <HomeContainer>
        <SearchInput>
          <TextInput
            value={search}
            placeholder="Buscar"
            onChangeText={setSearch}
          />
        </SearchInput>
        <HomeNavBarIcon>
          <Avatar />
        </HomeNavBarIcon>
      </HomeContainer>
      <LocationInfo>
        <Ionicons name="location-outline" color="black" size={20} />
        <LocationText>DDD 83 - Paraiba</LocationText>
      </LocationInfo>
      <ScrollView>
        <ShowFlatList>
          <TouchableOpacity onPress={() => navigation.navigate('Smartphones')}>
            <ContainerFlatList>
              <ShowFlatListText>Smartfone</ShowFlatListText>
            </ContainerFlatList>
          </TouchableOpacity>
        </ShowFlatList>
      </ScrollView>
    </HomeSafeAreaView>
  );
}
