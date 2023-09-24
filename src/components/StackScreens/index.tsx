import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '@screens/WelcomeScreen';
import React from 'react';

import type { StackScreensParamList } from './types';

const Stack = createStackNavigator<StackScreensParamList>();

export default function StackScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="WelcomeScreen"
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
