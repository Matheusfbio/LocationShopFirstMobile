import React, {useEffect, useState} from 'react';

import auth from '@react-native-firebase/auth';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';

import {TabBarRoutes} from './src/routes/tab.user.routes';
import LoginScreen from './src/screens/login-screen/Login';
import {theme} from './src/theme';

export default function App() {
  const [userInfo, setUserInfo] = useState(false);
  const [initializing, setInitializing] = useState(false);

  function onAuthStateChanged(user: any) {
    setUserInfo(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) {
    return (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return userInfo ? (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <TabBarRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
  ) : (
    <NativeBaseProvider theme={theme}>
      <LoginScreen />
    </NativeBaseProvider>
  );
}
