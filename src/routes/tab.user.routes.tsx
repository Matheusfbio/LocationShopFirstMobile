import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SettingScreen from '../screens/setting-screen/SettingScreen';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import AnnounceScreen from '../screens/announce-screen';
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
          tabBarLabel: 'home',
          tabBarLabelStyle: {
            position: 'relative',
            bottom: 5,
          },
          tabBarIcon: ({color, size}) => (
            <IconView>
              <Materiallcons name="home-filled" color={color} size={size + 1} />
            </IconView>
          ),
        }}
      />
      <Screen
        name="Anuncio"
        component={AnnounceScreen}
        options={{
          tabBarLabel: 'anunciar',
          tabBarLabelStyle: {
            position: 'relative',
            bottom: 5,
          },
          tabBarIcon: ({color, size}) => (
            <IconView>
              <Materiallcons
                name="add-circle-outline"
                color={color}
                size={size + 1}
              />
            </IconView>
          ),
        }}
      />
      <Screen
        name="Config"
        component={SettingScreen}
        options={{
          tabBarLabel: 'configuração',
          tabBarLabelStyle: {
            position: 'relative',
            bottom: 5,
          },
          tabBarIcon: ({color, size}) => (
            <IconView>
              <Materiallcons name="settings" color={color} size={size + 1} />
            </IconView>
          ),
        }}
      />
    </Navigator>
  );
}
