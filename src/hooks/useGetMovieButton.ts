import { useState } from 'react';

export default function useGetMovieButton() {
  const [movieButtonStatusList, setMovieButtonStatusList] = useState([
    { id: '1', active: true, text: 'Action' },
    { id: '2', active: false, text: 'Comedy' },
    { id: '3', active: false, text: 'Romance' },
    { id: '4', active: false, text: 'Thriller' },
    { id: '5', active: false, text: 'Fantasy' },
  ]);

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

  const MOVIE_BUTTONS = [
    {
      id: '1',
      text: 'Action',
      onPress: () => {
        handleChangeMovieStatusToActive('1');
      },
    },
    {
      id: '2',
      text: 'Comedy',
      onPress: () => {
        handleChangeMovieStatusToActive('2');
      },
    },
    {
      id: '3',
      text: 'Romance',
      onPress: () => {
        handleChangeMovieStatusToActive('3');
      },
    },
    {
      id: '4',
      text: 'Thriller',
      onPress: () => {
        handleChangeMovieStatusToActive('4');
      },
    },
    {
      id: '5',
      text: 'Fantasy',
      onPress: () => {
        handleChangeMovieStatusToActive('5');
      },
    },
  ];

  return { MOVIE_BUTTONS, movieButtonStatusList };
}
