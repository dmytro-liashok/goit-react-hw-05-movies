import { lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api-movies';
import { toast } from 'react-toastify';
import { CastMovieList } from '../components/CastMovieItem/CastMovieItem.styled';
const CastMovieItem = lazy(() =>
  import('components/CastMovieItem/CastMovieItem')
);

export default function CastMoviePage() {
  const [casts, setCast] = useState([]);
  const movieId = useParams().movieId;

  useEffect(() => {
    async function fetchCastMovie() {
      try {
        const response = await getMovieCast(movieId);
        setCast(response.cast);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again!');
      }
    }
    fetchCastMovie();
  }, [movieId]);

  return (
    <>
      {casts && (
        <CastMovieList>
          {casts.map(cast => (
            <CastMovieItem key={cast.id} cast={cast} />
          ))}
        </CastMovieList>
      )}
    </>
  );
}
