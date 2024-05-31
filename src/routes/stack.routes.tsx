// import {
//   createNativeStackNavigator,
//   NativeStackNavigationProp,
// } from '@react-navigation/native-stack';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import SmartFoneScreen from '../screens/smartfone-screen/SmartfoneScreen';
// import HomeScreen from '../screens/home-screen';

// type StackNavigation = {
//   HomeScreen: undefined;
//   Smartphone: undefined;
// };

// const Stack = createNativeStackNavigator();

// export type StackTypes = NativeStackNavigationProp<StackNavigation>;

// export default function StackRoutes() {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Smartphone" component={SmartFoneScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
