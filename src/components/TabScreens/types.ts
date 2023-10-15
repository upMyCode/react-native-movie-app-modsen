import { StackScreensParamList } from '@components/HomeStackScreen/types';
import { ParamListBase } from '@react-navigation/native';

export interface TabScreensParamList extends ParamListBase {
  HomeStackScreen: StackScreensParamList;
  TopFilmsScreen: undefined;
  TicketsScreen: undefined;
  ProfileScreen: undefined;
}
