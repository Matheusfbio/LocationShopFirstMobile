import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SettingScreen from '../screens/setting-screen/SettingScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AnnounceScreen from '../screens/announce-screen';
import HomeScreen from '../screens/home-screen';
import {IconView} from './styles';
import AnnounceRouter from './announce.routes';

const {Screen, Navigator} = createBottomTabNavigator();

export function TabBarRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name="Home"
        component={AnnounceRouter}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <IconView>
              <Entypo name="home" color={color} size={size + 10} />
            </IconView>
          ),
        }}
      />
      <Screen
        name="Anuncio"
        component={AnnounceScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <IconView>
              <Entypo name="shop" color={color} size={size + 10} />
            </IconView>
          ),
        }}
      />
      <Screen
        name="Config"
        component={SettingScreen}
        options={{
          tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => (
            <IconView>
              <SimpleLineIcons name="menu" size={size + 6} color={color} />
            </IconView>
          ),
        }}
      />
    </Navigator>
  );
}
