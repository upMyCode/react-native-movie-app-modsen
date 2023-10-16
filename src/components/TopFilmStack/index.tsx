import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsTopScreen from '@screens/DetailsTopScreen';
import TopFilmsScreen from '@screens/TopFilmsScreen';

import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function TopFilmStack() {
  return (
    <Stack.Navigator
      initialRouteName="TopFilmsScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="TopFilmsScreen" component={TopFilmsScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsTopScreen} />
    </Stack.Navigator>
  );
}

export default TopFilmStack;
