import { lazy, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api-movies';
import { ReviewMovieListStyled } from '../components/ReviewMovieItem/ReviewMovieItem.styled';
const ReviewMovieItem = lazy(() =>
  import('components/ReviewMovieItem/ReviewMovieItem')
);

export default function ReviewsMoviePage() {
  const [reviews, setReviews] = useState([]);
  const movieId = useParams().movieId;

  useEffect(() => {
    async function fetchReviewsMovie() {
      const response = await getMovieReviews(movieId);
      setReviews(response.results);
    }
    fetchReviewsMovie();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ReviewMovieListStyled>
          {reviews.map(review => (
            <ReviewMovieItem key={review.id} review={review} />
          ))}
        </ReviewMovieListStyled>
      )}
      {reviews?.length === 0 && (
        <p>
          <b>Not found</b>
        </p>
      )}
    </>
  );
}

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getMovieCast } from 'services/api-movies';

// export default function CastMovie() {
//   const [casts, setCast] = useState([]);
//   const movieId = useParams().movieId;

//   useEffect(() => {
//     async function fetchCastMovie() {
//       const response = await getMovieCast(movieId);
//       setCast(response.cast);
//     }
//     fetchCastMovie();
//   }, []);

//   return (
//     <>
//       {casts && (
//         <ul>
//           {casts.map(cast => (
//             <li key={cast.id}>{cast.name}</li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }
