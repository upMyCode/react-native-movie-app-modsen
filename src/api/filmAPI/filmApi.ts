/* eslint-disable import/no-unresolved */
import { MOCK_TOP_100_MOVIE, USER_ID } from '@constants/mockData';
import {
  API_KEY_ADVANCED_SEARCH,
  API_KEY_DATABASE,
  API_KEY_KINOCHECK,
  API_KEY_RAPID_MOVIES_INFO,
  // API_KEY_TOP_100_RAPID,
} from '@env';
import { firebase } from '@react-native-firebase/database';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';

import { getCurrentUserId } from '../authAPI/authApi';
import type { Comment, Error, FilmSession, Movie, TopMovie } from '../types';

function isError(candidate: unknown): candidate is Error {
  if (candidate && typeof candidate === 'object' && 'code' in candidate) {
    return true;
  }
  return false;
}

export const addCommentToFilm = (currentFilmID: string, comment: string) => {
  try {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const CURRENT_USER_ID = user.uid;

        if (CURRENT_USER_ID) {
          firebase
            .app()
            .database(API_KEY_DATABASE)
            .ref(`/films/comments/${currentFilmID}`)
            .push({
              currentDate: new Date().toString(),
              comment,
              userId: CURRENT_USER_ID,
            });
        }
      }
    });

    Snackbar.show({
      text: 'Comment has beeen added',
      duration: Snackbar.LENGTH_LONG,
    });
  } catch (error) {
    if (isError(error)) {
      Snackbar.show({
        text: error.message,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  }
};

export const checkCommentByFilmId = async (
  currentFilmID: string
): Promise<Record<string, Comment> | null | string> => {
  try {
    const filmRef = firebase
      .app()
      .database(API_KEY_DATABASE)
      .ref(`/films/comments/${currentFilmID}`);

    if (filmRef) {
      const snapshot = await filmRef.once('value');
      const filmComments = snapshot.val();

      if (filmComments) {
        return filmComments;
      }
    }

    return null;
  } catch (error) {
    if (isError(error)) {
      Snackbar.show({
        text: error.message,
        duration: Snackbar.LENGTH_LONG,
      });
    }

    return '';
  }
};

export const handleGetThrailerYouTubeMovieByID = async (
  id: string
): Promise<string> => {
  try {
    const options = {
      method: 'GET',
      url: API_KEY_KINOCHECK,
      params: {
        imdb_id: id,
        language: 'en',
      },
    };
    const response = await axios.request(options);

    if (response.data) {
      const filmData = response.data;
      return filmData.trailer.youtube_video_id;
    }

    return '';
  } catch (error) {
    if (isError(error)) {
      return error.code;
    }
    return '';
  }
};

export const handleGetMovies = async (
  label: string
): Promise<Movie[] | string | null> => {
  const endYear = new Date().getFullYear();
  const startYear = (+endYear - 2).toString();
  const options = {
    method: 'GET',
    url: API_KEY_ADVANCED_SEARCH,
    params: {
      start_year: startYear,
      end_year: endYear,
      min_imdb: '7',
      genre: label,
      language: 'english',
      type: 'movie',
      sort: 'latest',
      page: '1',
    },
    headers: {
      'X-RapidAPI-Key': API_KEY_RAPID_MOVIES_INFO,
      'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);

    if (response) {
      if (response.data) {
        return response.data.results;
      }
    }
    return null;
  } catch (error: unknown) {
    if (isError(error)) {
      return error.code;
    }
    return '';
  }
};

export const handleCreateSession = (
  filmId: string,
  session: FilmSession[]
): void => {
  try {
    firebase
      .app()
      .database(API_KEY_DATABASE)
      .ref(`/films/sessions/${filmId}`)
      .set(session);

    Snackbar.show({
      text: 'session created',
      duration: Snackbar.LENGTH_LONG,
    });
  } catch (error) {
    if (isError(error)) {
      return Snackbar.show({
        text: error.message,
        duration: Snackbar.LENGTH_LONG,
      });
    }
  }
};

export const getFilmSessions = async (filmId: string) => {
  const database = firebase.app().database(API_KEY_DATABASE);
  const filmsRef = database.ref(`/films/sessions/${filmId}`);

  try {
    const snapshot = await filmsRef.once('value');
    const filmData = snapshot.val();
    return filmData;
  } catch (error) {
    Snackbar.show({
      text: 'Error while retrieving data from the database',
      duration: Snackbar.LENGTH_LONG,
    });
  }
};

export function handleBuyTicket(
  tickedId: string,
  filmId: string,
  sessionId: string,
  ticketCount: number
) {
  const ticket = {
    past: false,
    ticketId: tickedId,
    filmId,
    sessionId,
    ticketCount,
  };

  const getCurrentUser = getCurrentUserId();

  if (typeof getCurrentUser !== 'string') {
    getCurrentUser.then(() => {
      try {
        firebase
          .app()
          .database(API_KEY_DATABASE)
          .ref(`/users/${USER_ID}/tickets`)
          .push(ticket);

        Snackbar.show({
          text: 'ticket bought',
          duration: Snackbar.LENGTH_LONG,
        });
      } catch (error) {
        if (isError(error)) {
          return Snackbar.show({
            text: error.message,
            duration: Snackbar.LENGTH_LONG,
          });
        }
      }
    });
  }
}

export async function getTop100Movies(): Promise<TopMovie[]> {
  // const options = {
  //   method: 'GET',
  //   url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  //   headers: {
  //     'X-RapidAPI-Key': API_KEY_TOP_100_RAPID,
  //     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
  //   },
  // };

  try {
    // const response = await axios.request(options);
    return MOCK_TOP_100_MOVIE;
  } catch (error) {
    Snackbar.show({
      text: `Error ${error}`,
      duration: Snackbar.LENGTH_LONG,
    });

    return [];
  }
}
