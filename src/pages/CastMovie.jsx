import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api-movies';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
        <ul>
          {casts.map(cast => (
            <li key={cast.id}>{cast.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
