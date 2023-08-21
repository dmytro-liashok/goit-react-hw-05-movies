import PropTypes from 'prop-types';
import {
  ReviewMovieItemStyled,
  FaUserStyled,
  ReviewDetailList,
  ReviewMovieWrap,
  ReviewDetailImg,
  ReviewDetailTitle,
  ReviewDetailText,
  ReviewDetailItem,
  ReviewAuthorWrap,
} from './ReviewMovieItem.styled';

export default function ReviewMovieItem({ review }) {
  return (
    <ReviewMovieItemStyled>
      <ReviewDetailList>
        {' '}
        <ReviewDetailItem>
          <ReviewMovieWrap>
            {review.author_details.avatar_path ? (
              <ReviewDetailImg
                src={`https://image.tmdb.org/t/p/w300${review.author_details.avatar_path}`}
                alt={review?.author}
              />
            ) : null}
            {!review.author_details.avatar_path && <FaUserStyled />}
            <ReviewAuthorWrap>
              <ReviewDetailTitle>{review.author}</ReviewDetailTitle>
              {review.author_details.rating && (
                <ReviewDetailText>
                  <h4>Rating user:</h4> {review.author_details?.rating}
                </ReviewDetailText>
              )}
              <ReviewDetailText>
                <h4>Date create review:</h4>
                {review.created_at.slice(0, 10)}
              </ReviewDetailText>
              {review.updated_at && (
                <ReviewDetailText>
                  <h4>Status:</h4> update
                </ReviewDetailText>
              )}
            </ReviewAuthorWrap>
          </ReviewMovieWrap>
        </ReviewDetailItem>
        <ReviewDetailItem>
          <ReviewDetailText>{review.content}</ReviewDetailText>
        </ReviewDetailItem>
      </ReviewDetailList>
    </ReviewMovieItemStyled>
  );
}

ReviewMovieItem.propTypes = {
  review: PropTypes.object.isRequired,
};
