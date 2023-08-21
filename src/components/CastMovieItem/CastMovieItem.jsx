import {
  CastMovieItemStyled,
  CastDetailList,
  CastDetailItem,
  CastMovieImg,
  FaUserStyled,
} from './CastMovieItem.styled';
import PropTypes from 'prop-types';

export default function CastMovieItem({ cast }) {
  return (
    <CastMovieItemStyled>
      {cast.profile_path && (
        <CastMovieImg
          src={
            cast.profile_path
              ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
              : null
          }
          alt={cast.name}
        />
      )}
      {!cast.profile_path && <FaUserStyled />}
      <CastDetailList>
        <CastDetailItem>{cast.name}</CastDetailItem>
        <CastDetailItem>as {cast.character}</CastDetailItem>
      </CastDetailList>
    </CastMovieItemStyled>
  );
}

CastMovieItem.propTypes = {
  onClickChangePage: PropTypes.object.isRequired,
};
