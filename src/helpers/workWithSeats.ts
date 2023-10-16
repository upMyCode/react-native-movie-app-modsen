import { FilmSession, Seat } from '@src/api/types';
import uuid from 'react-native-uuid';

export const getFilmSessionsByDate = (
  filmSessions: FilmSession[],
  date: Date
): FilmSession[] => {
  const formattedDate = date.toISOString().split('T')[0];
  return filmSessions.filter((session) => {
    return session.date === formattedDate;
  });
};

export const divideSeatsBySeatNumber = (seats: Seat[]): [Seat[], Seat[]] => {
  const seatsArray1: Seat[] = [];
  const seatsArray2: Seat[] = [];

  for (const seat of seats) {
    if (seat.seatNumber >= 1 && seat.seatNumber <= 4) {
      seatsArray1.push(seat);
    } else if (seat.seatNumber >= 5 && seat.seatNumber <= 8) {
      seatsArray2.push(seat);
    }
  }

  return [seatsArray1, seatsArray2];
};

export const countAvailableSeatsInSession = (session: FilmSession): number => {
  const availableSeats = session.seats.filter((seat) => {
    return seat.isAvailable === true;
  });
  return availableSeats.length;
};

export const isSeatInArray = (seatToFind: Seat, seatArray: Seat[]): boolean => {
  return seatArray.some((seat) => {
    return (
      seat.row === seatToFind.row && seat.seatNumber === seatToFind.seatNumber
    );
  });
};

export const updateSeatsInFilmSessions = (
  ticketId: string,
  sessions: FilmSession[],
  sessionId: string,
  newSeats: Seat[]
): FilmSession[] => {
  return sessions.map((session) => {
    if (session.id === sessionId) {
      const updatedSession = { ...session };
      updatedSession.seats = session.seats.map((seat) => {
        const matchingSeat = newSeats.find((newSeat) => {
          return (
            newSeat.row === seat.row && newSeat.seatNumber === seat.seatNumber
          );
        });
        if (matchingSeat) {
          return { ...seat, ticketId, isAvailable: false };
        }
        return seat;
      });
      return updatedSession;
    }
    return session;
  });
};

export const getId = () => {
  return uuid.v1().toString();
};
