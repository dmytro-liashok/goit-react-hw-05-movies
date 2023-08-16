import { NavLink, useLocation } from 'react-router-dom';

export default function FindMoviesList({
  findMovies,
  onClickChangePage,
  page,
  totalFindPages,
}) {
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
              <h3>{findMovie.title}</h3>
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        type="button"
        disabled={page === totalFindPages}
        onClick={() => {
          onClickChangePage(+1);
        }}
      >
        <b>Next Page</b>
      </button>
      <button
        type="button"
        disabled={page === 1}
        onClick={() => {
          onClickChangePage(-1);
        }}
      >
        <b>Past page</b>
      </button>
    </div>
  );
}
