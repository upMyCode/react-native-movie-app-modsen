export interface TrailerContainerProps {
  windowWidth: number;
}

export interface USER {
  id: string;
  username: string;
  usersurname: string;
  useremail: string;
}

export interface Comment {
  currentDate: string;
  comment: string;
  userId: string;
}

export interface YoTubePlayerState {
  isPlaying: boolean;
  status: null | string;
}

export interface YouTubeEvent {
  state: string;
  target: number;
}
