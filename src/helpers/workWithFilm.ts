import { TopMovie } from '@src/api/types';

const findMoviesByPartialTitle = (
  movies: TopMovie[],
  partialTitle: string
): TopMovie[] => {
  const matchingMovies: TopMovie[] = [];

  for (const movie of movies) {
    if (movie.title.toLowerCase().includes(partialTitle.toLowerCase())) {
      matchingMovies.push(movie);
    }
  }

  return matchingMovies;
};

export default findMoviesByPartialTitle;
