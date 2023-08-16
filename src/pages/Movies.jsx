import { useEffect, useState } from 'react';
import { getMovieSearch } from 'services/api-movies';
import FindMoviesList from './FindMoviesList';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Movies() {
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
      setFindMovies(response.results);
      setTotalFindPages(response.total_pages);
    }

    fetchSearchMovies();

    if (page === totalFindPages) {
      toast.warning('ops');
      return;
    }
  }, [serchQuery, page, totalFindPages]);

  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.search.value;
    setSearchParams({ query: value });
  }

  function handleChangePage(value) {
    setPage(prevPage => prevPage + value);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Please input value"
            required
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
      {findMovies?.length > 0 && (
        <FindMoviesList
          findMovies={findMovies}
          onClickChangePage={handleChangePage}
          page={page}
          totalFindPages={totalFindPages}
        />
      )}
    </div>
  );
}
