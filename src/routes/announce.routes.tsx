/* eslint-disable react/react-in-jsx-scope */
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import EditScreen from '../screens/edit-screen/EditScreen';
import HomeScreen from '../screens/home-screen';
import SmartPhoneScreen from '../screens/smartfone-screen/SmartphoneScreen';
import {Products} from '../interfaces/Products';

type StackNavigation = {
  HomeScreen: undefined;
  Smartphones: undefined;
  Edit: Products;
};

const Stack = createStackNavigator();

export type StackTypes = StackNavigationProp<StackNavigation>;

const AnnounceRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff', // Cor do fundo da barra de navegação
        },
        headerTintColor: '#000000', // Cor do texto e ícones na barra de navegação
        headerTitleStyle: {
          fontWeight: 'bold', // Personalização do estilo do título
        },
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{
          title: 'Location Shop',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Smartphones"
        component={SmartPhoneScreen}
        options={{
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="Edit"
        component={EditScreen}
        options={{
          title: 'Editar anuncios',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default AnnounceRouter;
