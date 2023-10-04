interface MovieButtonStatus {
  id: string;
  active: boolean;
  text: string;
}

export interface MovieButtonProps {
  text: string;
  onPress: () => void;
  movieButtonStatusList: MovieButtonStatus[];
}
