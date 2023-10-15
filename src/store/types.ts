interface USER {
  id: string;
  username: string;
  usersurname: string;
  useremail: string;
}

interface User {
  user: USER | null;
}

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

export interface State {
  createUserSlice: User;
  getMoviesSlice: MoviesLists;
}
