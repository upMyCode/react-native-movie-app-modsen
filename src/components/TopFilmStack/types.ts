import { NavigationProp, RouteProp } from '@react-navigation/native';
import { TopMovie } from '@src/api/types';

export type RootStackParamList = {
  TopFilmsScreen: undefined;
  DetailsScreen: { movie: TopMovie };
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export type StackNavigation = NavigationProp<RootStackParamList>;
