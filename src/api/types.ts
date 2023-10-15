import type { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface USER {
  id: string;
  username: string;
  usersurname: string;
  useremail: string;
}

export interface Error {
  code: string;
  message: string;
}

export interface Movie {
  imageurl: string[];
  imdbid: string;
  imdbrating: string;
  released: number;
  synopsis: string;
  genre: string[];
  title: string;
  type: string;
}

export interface FilmSession {
  id: string;
  coast: number;
  timeStart: string;
  timeEnd: string;
  date: string;
  cinema: string;
  seats: Seat[];
}

export interface Seat {
  ticketId: string;
  isAvailable: boolean;
  row: number;
  seatNumber: number;
}

export interface Comment {
  currentDate: string;
  comment: string;
  userId: string;
}

export interface TopMovie {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  description: string;
  trailer: string;
  genre: string[];
  director: string[];
  writers: string[];
  imdbid: string;
}

export type UserProfile = FirebaseAuthTypes.AdditionalUserInfo['profile'];
