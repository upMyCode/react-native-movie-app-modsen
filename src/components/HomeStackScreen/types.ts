import { NavigationProp, RouteProp } from '@react-navigation/native';

interface Movie {
  imageurl: string[];
  imdbid: string;
  imdbrating: string;
  released: number;
  synopsis: string;
  genre: string[];
  title: string;
  type: string;
}

export type StackScreensParamList = {
  HomeScreen: undefined;
  DetailsScreen: { movie: Movie };
  ChooseSeatsScreen: { movie: Movie };
};

export type RootRouteProps<RouteName extends keyof StackScreensParamList> =
  RouteProp<StackScreensParamList, RouteName>;

export type StackNavigation = NavigationProp<StackScreensParamList>;
