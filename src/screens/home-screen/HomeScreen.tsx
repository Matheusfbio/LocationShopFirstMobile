import {Dimensions, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Category,
  CategoryInfo,
  ContainerFlatList,
  HomeContainer,
  HomeNavBarIcon,
  HomeSafeAreaView,
  LocationInfo,
  ShowCarousel,
  ShowFlatList,
  ShowFlatListText,
} from './styles';

import {Avatar, Input, StatusBar, Text, View} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';

const SLIDE_WIDTH = Dimensions.get('screen').width;
// const ITEM_WIDTH = SLIDE_WIDTH * 1;

const StyledCarousel = styled.View`
  width: ${SLIDE_WIDTH}px;
  border: black 2px;
  width: 50%;
  /* flex-direction: row; */
`;

interface CarouselItem {
  imgLocal: number;
  categoryName: string;
}
interface Props {
  item: CarouselItem;
}

const carouselItems: CarouselItem[] = [
  {
    imgLocal: require('./img/category_icon.png'),
    categoryName: 'Todas as categorias',
  },
  {
    imgLocal: require('./img/category_icon.png'),
    categoryName: 'Moveis',
  },
  {
    imgLocal: require('./img/category_icon.png'),
    categoryName: 'Automoveis',
  },
  {
    imgLocal: require('./img/category_icon.png'),
    categoryName: 'Vende & Alugar',
  },
];

export default function HomeScreen() {
  return (
    <HomeSafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <HomeContainer>
        <Input placeholder="Buscar" w="85%" borderColor="black" margin="1.5" />
        <TouchableOpacity>
          <HomeNavBarIcon>
            <Ionicons name="notifications-outline" color="black" size={30} />
          </HomeNavBarIcon>
        </TouchableOpacity>
      </HomeContainer>
      <LocationInfo>
        <Ionicons name="location-outline" color="black" size={20} />
        <Text color="dark.50">DDD 83 - Paraiba</Text>
      </LocationInfo>
      <ShowFlatList>
        <FlatList
          data={carouselItems}
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
    </HomeSafeAreaView>
  );
}
