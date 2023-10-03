import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs/src/types';
import { NavigationHelpers } from '@react-navigation/core/lib/typescript/src/types';
import { ParamListBase } from '@react-navigation/native';

export interface Item {
  label: string;
  isFocused: boolean;
  options: BottomTabNavigationOptions;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}
