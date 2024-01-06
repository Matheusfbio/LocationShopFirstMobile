import {Dimensions, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  Category,
  CategoryInfo,
  HomeContainer,
  HomeNavBarIcon,
  LocationInfo,
  ShowCarousel,
} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Input, Text} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native';

const SLIDE_WIDTH = Dimensions.get('screen').width;
const ITEM_WIDTH = SLIDE_WIDTH * 1;

const StyledCarousel = styled.View`
  width: ${SLIDE_WIDTH}px;
  border: black 2px;
  margin: 0 -10% 0 0%;
  width: 90%;
  padding: 5%;
  align-items: center;
`;

interface CarouselItem {
  imgLocal: number;
}
interface Props {
  item: CarouselItem;
}

const carouselItems: CarouselItem[] = [
  {
    imgLocal: require('./img/category_icon.png'),
  },
  {
    imgLocal: require('./img/category_icon.png'),
  },
  {
    imgLocal: require('./img/category_icon.png'),
  },
  {
    imgLocal: require('./img/category_icon.png'),
  },
];

function caroselCardItem({item}: Props) {
  return (
    <StyledCarousel>
      <Image source={item.imgLocal} />
    </StyledCarousel>
  );
}
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
      <ShowCarousel>
        <Carousel
          data={carouselItems}
          renderItem={caroselCardItem}
          sliderWidth={SLIDE_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
        />
      </ShowCarousel>
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
      {/* <ShowProducts>
        <HeaderInfo>Mais procurados na sua região</HeaderInfo>
        </ShowProducts>
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
      <ShowProducts>
        <HeaderInfo>Mais procurados em Móveis</HeaderInfo>
      </ShowProducts>
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
      </Category> */}
    </SafeAreaView>
  );
}
