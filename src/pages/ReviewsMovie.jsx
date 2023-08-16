import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api-movies';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function ReviewsMoviePage() {
  const [reviews, setReviews] = useState([]);
  const movieId = useParams().movieId;

  useEffect(() => {
    async function fetchReviewsMovie() {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again!');
        throw error;
      }
    }
    fetchReviewsMovie();
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
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
