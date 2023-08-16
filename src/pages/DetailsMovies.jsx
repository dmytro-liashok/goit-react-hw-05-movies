import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getDetailsMovies } from 'services/api-movies';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const CastMoviePage = lazy(() => import('./CastMovie'));
const ReviewsMoviePage = lazy(() => import('./ReviewsMovie'));

export default function DetailsMovies() {
  const [DetailsMovies, setDetailsMovies] = useState([]);
  const movieId = useParams().movieId;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchDetailsMovies() {
      try {
        const response = await getDetailsMovies(movieId);
        setDetailsMovies(response);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again!');
        throw error;
      }
    }
    if (!loaded) {
      fetchDetailsMovies();
      setLoaded(true);
    }
  }, [loaded, movieId]);
  return (
    <>
      <NavLink to={backLinkHref.current}>Go back</NavLink>
      <h1>DetailsMovies: {DetailsMovies.title}</h1>
      {DetailsMovies.poster_path && (
        <img
          alt={`${DetailsMovies.title}`}
          src={`https://image.tmdb.org/t/p/w300${DetailsMovies.poster_path}`}
        />
      )}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="cast" element={<CastMoviePage />} />
          <Route path="reviews" element={<ReviewsMoviePage />} />
        </Routes>
      </Suspense>
    </>
  );
}
