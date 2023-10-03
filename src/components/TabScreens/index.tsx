import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar } from '@root';
import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import TicketsScreen from '@screens/TicketsScreen';
import TopFilmsScreen from '@screens/TopFilmsScreen';
import React from 'react';

import { TabScreensParamList } from './types';

export default function TabScreens() {
  const Tab = createBottomTabNavigator<TabScreensParamList>();
  return (
    <Tab.Navigator
      tabBar={(props) => {
        return <CustomTabBar {...props} />;
      }}
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen"
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="TopFilmsScreen" component={TopFilmsScreen} />
      <Tab.Screen name="TicketsScreen" component={TicketsScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
