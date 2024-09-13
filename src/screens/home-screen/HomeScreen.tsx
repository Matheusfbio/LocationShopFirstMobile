import {
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  ContainerFlatList,
  HomeContainer,
  HomeSafeAreaView,
  LocationInfo,
  LocationText,
  SearchInput,
  ShowFlatListText,
} from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackTypes} from '../../routes/announce.routes';
import {ImageSourcePropType} from 'react-native';

type ImageMap = {
  smartphone: ImageSourcePropType;
  furniture: ImageSourcePropType;
  category: ImageSourcePropType;
  sell: ImageSourcePropType;
  autos: ImageSourcePropType;
};

const imageMap: ImageMap = {
  smartphone: require('./img/smartphone_icon.png'),
  furniture: require('./img/furniture_icon.png'),
  category: require('./img/category_icon.png'),
  sell: require('./img/sell_icon.png'),
  autos: require('./img/vehicle_icon.png'),
};

const categoryList: Array<{id: string; title: string; source: keyof ImageMap}> =
  [
    {id: '1', title: 'Smartphone', source: 'smartphone'},
    {id: '2', title: 'Furniture', source: 'furniture'},
    {id: '3', title: 'Category', source: 'category'},
    {id: '4', title: 'Sell', source: 'sell'},
    {id: '5', title: 'Autos', source: 'autos'},
  ];

export default function HomeScreen() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const navigation = useNavigation<StackTypes>();

  const onRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // Adicione a lógica para buscar novos dados aqui
    setIsRefreshing(false);
  }, []);

  const renderItem = ({
    item,
  }: {
    item: {id: string; title: string; source: keyof ImageMap};
  }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Smartphones')}>
      <ContainerFlatList>
        {/* <Image source={require('./img/smartphone_icon.png')} /> */}
        <Image source={imageMap[item.source] as ImageSourcePropType} />
        <ShowFlatListText>{item.title}</ShowFlatListText>
      </ContainerFlatList>
    </TouchableOpacity>
  );

  return (
    <HomeSafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }>
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
        <FlatList
          data={categoryList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </HomeSafeAreaView>
  );
}
