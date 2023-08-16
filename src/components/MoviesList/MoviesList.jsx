import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api-movies';

export default function MoviesList() {
  const [moviesData, setMoviesData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrendingMovies() {
      const response = await getTrendingMovies();
      setMoviesData(response.results);
    }

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <ul>
        {moviesData.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
