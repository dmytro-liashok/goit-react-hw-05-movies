import { lazy, useEffect, useState } from 'react';
import { getMovieSearch } from 'services/api-movies';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));
const SearchBar = lazy(() => import('../components/Searchbar/Searchbar'));
const SearchBarClue = lazy(() =>
  import('components/SearchBarClue/SearchBarClue')
);
const ResultMoviesText = lazy(() =>
  import('components/ResultMoviesText/ResultMoviesText')
);
const ButtonsChangePage = lazy(() =>
  import('components/ButtonsChangePage/ButtonsChangePage')
);

export default function MoviesPage({ moviesGenres }) {
  const [findMovies, setFindMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalFindPages, setTotalFindPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const serchQuery = searchParams.get('query');

  useEffect(() => {
    if (!serchQuery) {
      return;
    }

    async function fetchSearchMovies() {
      const response = await getMovieSearch(serchQuery, page);
      const findMovies = response.results;
      if (findMovies.length === 0) {
        toast.info(`Movies "${serchQuery}" is not found`);
        setFindMovies([]);
        return;
      }
      setFindMovies(findMovies);
      setTotalFindPages(response.total_pages);
    }

    fetchSearchMovies();

    if (page === totalFindPages) {
      toast.warning(`No more movies by search "${serchQuery}" `);
      return;
    }
  }, [serchQuery, page, totalFindPages]);

  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.search.value.trim();
    setSearchParams({ query: value });
    setPage(1);
  }

  function handleChangePage(value) {
    setPage(prevPage => prevPage + value);
  }

  return (
    <div>
      {findMovies.length === 0 && <SearchBarClue />}
      <SearchBar onClickSubmit={handleSubmit} />
      {findMovies.length > 0 && <ResultMoviesText />}
      {findMovies?.length > 0 && (
        <MoviesList moviesData={findMovies} moviesGenres={moviesGenres} />
      )}
      {findMovies?.length > 0 && (
        <ButtonsChangePage
          onClickChangePage={handleChangePage}
          page={page}
          totalFindPages={totalFindPages}
        />
      )}
    </div>
  );
}

MoviesPage.propTypes = {
  moviesGenres: PropTypes.array.isRequired,
};
