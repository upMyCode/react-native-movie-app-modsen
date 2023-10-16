import { createStackNavigator } from '@react-navigation/stack';
import ChooseSeatsScreen from '@screens/ChooseSeatsScreen';
import DetailsScreen from '@screens/DetailsScreen';
import HomeScreen from '@screens/HomeScreen';
import React from 'react';

import type { StackScreensParamList } from './types';

const Stack = createStackNavigator<StackScreensParamList>();

export default function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="ChooseSeatsScreen" component={ChooseSeatsScreen} />
    </Stack.Navigator>
  );
}
