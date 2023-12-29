import {SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  Category,
  CategoryInfo,
  HomeContainer,
  HomeNavBarIcon,
  LocationInfo,
} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Input, Text} from 'native-base';
export default function HomeScreen() {
  const [value, setValue] = useState('');

  return (
    <SafeAreaView>
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
      <Category>
        <CategoryInfo>
          <Avatar
            bg="green.500"
            alignSelf="center"
            size="xl"
            textAlign="center"></Avatar>
          <Text color="black" textAlign="center" size="20">
            Todas as categorias
          </Text>
        </CategoryInfo>
        <CategoryInfo>
          <Avatar
            bg="green.500"
            alignSelf="center"
            size="xl"
            textAlign="center"></Avatar>
          <Text color="black" textAlign="center" size="20">
            Todas as categorias
          </Text>
        </CategoryInfo>
        <CategoryInfo>
          <Avatar
            bg="green.500"
            alignSelf="center"
            size="xl"
            textAlign="center"></Avatar>
          <Text color="black" textAlign="center" size="20">
            Todas as categorias
          </Text>
        </CategoryInfo>
      </Category>
    </SafeAreaView>
  );
}
