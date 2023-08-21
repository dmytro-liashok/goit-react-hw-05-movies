import { useEffect, useState, lazy } from 'react';
import { getTrendingMovies } from 'services/api-movies';
import PropTypes from 'prop-types';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

export default function HomePage({ moviesGenres }) {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    async function fetchTrendingMovies() {
      const response = await getTrendingMovies();
      setMoviesData(response.results);
    }

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1
        style={{
          fontFamily: 'Kanit',
          fontSize: '24px',
          color: '#f5f6f8',
          fontWeight: 500,
          lineHeight: '110%',
          letterSpacing: '-0.24px',
          textAlign: 'center',
          padding: '20px 0 ',
        }}
      >
        Trending today
      </h1>
      <MoviesList moviesData={moviesData} moviesGenres={moviesGenres} />
    </>
  );
}

HomePage.propTypes = {
  moviesGenres: PropTypes.array.isRequired,
};
