import { useEffect, useState } from 'react';
import { getMovieSearch } from 'services/api-movies';
import FindMoviesList from './FindMoviesList';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [findMovies, setFindMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const serchQuery = searchParams.get('query');

  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.search.value;
    setSearchParams({ query: value });
  }

  useEffect(() => {
    if (!serchQuery) {
      return;
    }
    async function fetchSearchMovies() {
      const response = await getMovieSearch(serchQuery);
      setFindMovies(response.results);
    }

    fetchSearchMovies();
  }, [serchQuery]);

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
      {findMovies?.length > 0 && <FindMoviesList findMovies={findMovies} />}
    </div>
  );
}
