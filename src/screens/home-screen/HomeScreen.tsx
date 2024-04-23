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

interface CarouselItem {
  imgLocal: number;
  categoryName: string;
}

const carouselItems: CarouselItem[] = [
  {
    imgLocal: require('./img/category_icon.png'),
    categoryName: 'Todas as categorias',
  },
  {
    imgLocal: require('./img/furniture_icon.png'),
    categoryName: 'Moveis',
  },
  {
    imgLocal: require('./img/vehicle_icon.png'),
    categoryName: 'Automoveis',
  },
  {
    imgLocal: require('./img/sell_icon.png'),
    categoryName: 'Vende & Alugar',
  },
  {
    imgLocal: require('./img/smartphone_icon.png'),
    categoryName: 'Smartphone',
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  return (
    <HomeSafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <HeaderText>Location Shop</HeaderText>
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
          <FlatList
            data={carouselItems}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity>
                <ContainerFlatList>
                  <Image source={item.imgLocal} />
                  <ShowFlatListText>{item.categoryName}</ShowFlatListText>
                </ContainerFlatList>
              </TouchableOpacity>
            )}
            horizontal={true}
          />
        </ShowFlatList>
      </ScrollView>
    </HomeSafeAreaView>
  );
}
