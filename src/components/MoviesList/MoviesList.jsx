import { lazy } from 'react';
import PropTypes from 'prop-types';
import { MovieList } from './MoviesList.styled';
const MovieItem = lazy(() => import('components/MovieItem/MovieItem'));

export default function MoviesList({ moviesData, moviesGenres }) {
  return (
    <>
      <MovieList>
        {moviesData.map(movie => (
          <MovieItem
            key={movie.id}
            movieData={movie}
            moviesGenres={moviesGenres}
          />
        ))}
      </MovieList>
    </>
  );
}

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
  moviesGenres: PropTypes.array.isRequired,
};
