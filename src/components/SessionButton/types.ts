import { FilmSession } from '@src/api/types';

export interface SessionButtonContainerProps {
  bgColor: string;
  bColor: string;
  bWidth: number;
}

export interface TimeTextProps {
  color: string;
}

export interface SessionButtonProps {
  session: FilmSession;
  chosenSessions: string;
  handleChooseSession: (id: string) => void;
}

export interface AvailableSeatsProps extends TimeTextProps {}
export interface CinemaTextProps extends TimeTextProps {}
