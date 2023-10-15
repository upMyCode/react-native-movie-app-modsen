import { setMoviesByGenre } from '@slices/getMoviesSlice';
import { handleGetMovies } from '@src/api/filmAPI/filmApi';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import axios from 'axios';
import { useState } from 'react';

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

export default function useGetMovieButton() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => {
    return state.getMoviesSlice;
  });
  const [genreStatus, setGenre] = useState<string>('action');
  const [movieButtonStatusList, setMovieButtonStatusList] = useState([
    { id: '1', active: true, text: 'Action' },
    { id: '2', active: false, text: 'Comedy' },
    { id: '3', active: false, text: 'Romance' },
    { id: '4', active: false, text: 'Thriller' },
    { id: '5', active: false, text: 'Fantasy' },
  ]);

  const checkIsMoviesListShouldBeUpdate = (genre: string) => {
    const isShouldUpdate = movies[genre];

    if (isShouldUpdate) {
      return false;
    }

    return true;
  };

  const handleChangeMovieStatusToActive = (id: string) => {
    setMovieButtonStatusList((prev) => {
      const newMovieButtonList = prev.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            active: true,
          };
        }
        return {
          ...movie,
          active: false,
        };
      });

      return newMovieButtonList;
    });
  };

  const checkUrlImage = async (url: string): Promise<boolean> => {
    try {
      const response = await axios.get(url);

      if (response) return true;

      return false;
    } catch (error) {
      return false;
    }
  };

  const handleSetMoviesByGenre = async (moviesData: Movie[], genre: string) => {
    const moviesWithCorrectImageLink = await Promise.all(
      moviesData.map(async (film) => {
        try {
          if (film.imageurl[0] !== undefined) {
            const check = await checkUrlImage(film.imageurl[0]);

            if (check) {
              return film;
            }

            return '';
          }
        } catch (error) {
          return '';
        }

        return '';
      })
    );

    const clearMovie = moviesWithCorrectImageLink
      .filter((film) => {
        return film !== '' && film.imageurl[0] !== undefined;
      })
      .slice(0, 10);

    const payloadData = {
      genre,
      clearMovie,
    };

    dispatch(setMoviesByGenre(payloadData));
  };

  const MOVIE_BUTTONS = [
    {
      id: '1',
      text: 'Action',
      onPress: async () => {
        handleChangeMovieStatusToActive('1');

        if (checkIsMoviesListShouldBeUpdate('action')) {
          const response = await handleGetMovies('action');

          if (response && typeof response !== 'string') {
            await handleSetMoviesByGenre(response, 'action');
          }
        }

        setGenre('action');
      },
    },
    {
      id: '2',
      text: 'Comedy',
      onPress: async () => {
        handleChangeMovieStatusToActive('2');

        if (checkIsMoviesListShouldBeUpdate('comedy')) {
          const response = await handleGetMovies('comedy');

          if (response && typeof response !== 'string') {
            await handleSetMoviesByGenre(response, 'comedy');
          }
        }

        setGenre('comedy');
      },
    },
    {
      id: '3',
      text: 'Romance',
      onPress: async () => {
        handleChangeMovieStatusToActive('3');

        if (checkIsMoviesListShouldBeUpdate('romance')) {
          const response = await handleGetMovies('romance');

          if (response && typeof response !== 'string') {
            await handleSetMoviesByGenre(response, 'romance');
          }
        }

        setGenre('romance');
      },
    },
    {
      id: '4',
      text: 'Thriller',
      onPress: async () => {
        handleChangeMovieStatusToActive('4');

        if (checkIsMoviesListShouldBeUpdate('thriller')) {
          const response = await handleGetMovies('thriller');
          if (response && typeof response !== 'string') {
            await handleSetMoviesByGenre(response, 'thriller');
          }
        }

        setGenre('thriller');
      },
    },
    {
      id: '5',
      text: 'Fantasy',
      onPress: async () => {
        if (checkIsMoviesListShouldBeUpdate('fantasy')) {
          const response = await handleGetMovies('fantasy');

          if (response && typeof response !== 'string') {
            await handleSetMoviesByGenre(response, 'fantasy');
          }
        }

        handleChangeMovieStatusToActive('5');

        setGenre('fantasy');
      },
    },
  ];

  return { MOVIE_BUTTONS, movieButtonStatusList, genreStatus };
}
