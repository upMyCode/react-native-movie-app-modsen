export interface RenderItemMovieButtonProps {
  id: string;
  text: string;
  onPress: () => void;
}

export interface RenderItemMovieProps {
  imageurl: string[];
  imdbid: string;
  imdbrating: string;
  released: number;
  synopsis: string;
  genre: string[];
  title: string;
  type: string;
}

export interface ImageWrapperProps {
  mLeft: number;
  mRight: number;
}

export interface TitleProps {
  mBot: number;
}

export interface ImageItemProps {
  image: string;
  id: number;
  scrollX: number;
}

export interface CarouselItem {
  id: string;
  title: string;
  genres: string[];
}

export interface YoTubePlayerState {
  isPlaying: boolean;
  status: null | string;
}

export interface YouTubeEvent {
  state: string;
  target: number;
}

export interface ViewToken {
  item: any;
  key: string;
  index: number | null | undefined;
  isViewable: boolean;
  section?: any;
}

export interface ViewableItems {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
