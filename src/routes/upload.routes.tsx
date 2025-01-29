/* eslint-disable react/react-in-jsx-scope */
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Products} from '../interfaces/Products';
import UploadScreen from '../screens/upload-screen/UploadScreen';

type StackNavigation = {
  UploadScreen: undefined;
  // Smartphones: undefined;
  // Edit: Products;
};

const Stack = createStackNavigator();

export type OneStackTypes = StackNavigationProp<StackNavigation>;

export default function UploadRouter() {
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
        name="Uploader"
        component={UploadScreen}
        options={{
          title: '',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          gestureEnabled: true,
        }}
      />
    </Stack.Navigator>
  );
}
