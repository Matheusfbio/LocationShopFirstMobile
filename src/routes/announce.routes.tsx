import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import EditScreen from '../screens/edit-screen/EditScreen';
import HomeScreen from '../screens/home-screen';
import SmartPhoneScreen from '../screens/smartfone-screen/SmartphoneScreen';

type StackNavigation = {
  HomeScreen: undefined;
  Smartphones: undefined;
  Edit: undefined;
};

const Stack = createStackNavigator();

export type StackTypes = StackNavigationProp<StackNavigation>;

const AnnounceRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
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
      <Stack.Screen name="Smartphones" component={SmartPhoneScreen} />
      <Stack.Screen
        name="Edit"
        component={EditScreen}
        options={{title: 'Editar anuncios'}}
      />
    </Stack.Navigator>
  );
};

export default AnnounceRouter;
