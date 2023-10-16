/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { HomeStackScreen, TabBarItem, TopFilmStack } from '@root';
import ProfileScreen from '@screens/ProfileScreen';
import TicketsScreen from '@screens/TicketsScreen';
import isDisableTabBarInterface from '@src/helpers/isDisableTabBarInterface';
import React from 'react';

import inlineStyle from './styles';
import { TabScreensParamList } from './types';

export default function TabScreens() {
  const Tab = createBottomTabNavigator<TabScreensParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: inlineStyle.tabStyle,
      }}
      initialRouteName="HomeStackScreen"
    >
      <Tab.Screen
        options={({ route }) => {
          return {
            tabBarStyle: ((routes) => {
              const routeName = getFocusedRouteNameFromRoute(routes) ?? '';

              if (
                isDisableTabBarInterface(routeName, [
                  'DetailsScreen',
                  'ChooseSeatsScreen',
                ])
              ) {
                return {
                  display: 'none',
                };
              }

              return inlineStyle.disabledRedirectionBar;
            })(route),

            tabBarIcon: ({ focused }) => {
              return <TabBarItem label="HomeStackScreen" isFocused={focused} />;
            },
          };
        }}
        key="HomeStackScreen"
        name="HomeStackScreen"
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={({ route }) => {
          return {
            tabBarStyle: ((_routes) => {
              // const routeName = getFocusedRouteNameFromRoute(routes) ?? '';

              return inlineStyle.disabledRedirectionBar;
            })(route),

            tabBarIcon: ({ focused }) => {
              return <TabBarItem label="TopFilmStack" isFocused={focused} />;
            },
          };
        }}
        key="TopFilmStack"
        name="TopFilmStack"
        component={TopFilmStack}
      />
      <Tab.Screen
        options={({ route }) => {
          return {
            tabBarStyle: ((_routes) => {
              // const routeName = getFocusedRouteNameFromRoute(routes) ?? '';

              return inlineStyle.disabledRedirectionBar;
            })(route),

            tabBarIcon: ({ focused }) => {
              return <TabBarItem label="TicketsScreen" isFocused={focused} />;
            },
          };
        }}
        name="TicketsScreen"
        component={TicketsScreen}
      />
      <Tab.Screen
        options={({ route }) => {
          return {
            tabBarStyle: ((_routes) => {
              // const routeName = getFocusedRouteNameFromRoute(routes) ?? '';

              return inlineStyle.disabledRedirectionBar;
            })(route),

            tabBarIcon: ({ focused }) => {
              return <TabBarItem label="ProfileScreen" isFocused={focused} />;
            },
          };
        }}
        key="ProfileScreen"
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
