import { NavLink, useLocation } from 'react-router-dom';

export default function FindMoviesList({ findMovies }) {
  const location = useLocation();

  return (
    <div>
      <ul>
        {findMovies.map(findMovie => (
          <li key={findMovie.id}>
            <NavLink to={`/movies/${findMovie.id}`} state={{ from: location }}>
              {findMovie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w300${findMovie.poster_path}`}
                  alt={findMovie.original_title}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
