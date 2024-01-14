import {FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ContainerFlatList,
  HeaderText,
  HomeContainer,
  HomeNavBarIcon,
  HomeSafeAreaView,
  LocationInfo,
  ShowFlatList,
  ShowFlatListText,
} from './styles';

import {Input, StatusBar, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Avatar from '../../Components/avatar/avatar';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import AnnounceScreen from '../announce-screen';
import SettingScreen from '../setting-screen';

interface CarouselItem {
  imgLocal: number;
  categoryName: string;
}

const Tab = createMaterialTopTabNavigator();

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
];

export default function HomeScreen() {
  return (
    <HomeSafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <HeaderText>Location Shop</HeaderText>
      <HomeContainer>
        <Input
          placeholder="Buscar"
          w="85%"
          borderColor="black"
          color={'black'}
          margin="1.5"
        />
        <HomeNavBarIcon>
          <Avatar />
        </HomeNavBarIcon>
      </HomeContainer>
      <LocationInfo>
        <Ionicons name="location-outline" color="black" size={20} />
        <Text color="dark.50">DDD 83 - Paraiba</Text>
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
        <NavigationContainer independent={true}>
          <Tab.Navigator initialRouteName="Users">
            <Tab.Screen name="Users" component={AnnounceScreen} />
            <Tab.Screen name="Config" component={SettingScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ScrollView>
    </HomeSafeAreaView>
  );
}
