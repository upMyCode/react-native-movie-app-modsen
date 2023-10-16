import { createSlice } from '@reduxjs/toolkit';

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

interface MoviesLists {
  action: Movie[] | null;
  comedy: Movie[] | null;
  romance: Movie[] | null;
  thriller: Movie[] | null;
  fantasy: Movie[] | null;
}

const initialState: MoviesLists = {
  action: null,
  comedy: null,
  romance: null,
  thriller: null,
  fantasy: null,
};

const getMoviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMoviesByGenre: (state, action) => {
      const newState = {
        ...state,
        [action.payload.genre]: action.payload.clearMovie,
      };

      return newState;
    },
  },
});

export const { setMoviesByGenre } = getMoviesSlice.actions;

export default getMoviesSlice.reducer;
