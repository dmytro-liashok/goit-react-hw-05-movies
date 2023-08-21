import React from 'react';
import { useLocation } from 'react-router-dom';
import defaultImg from '../../img/img-default-min.jpg';
import PropTypes from 'prop-types';
import {
  MovieItemStyled,
  MovieItemImg,
  MovieItemTitle,
  MovieItemNavLink,
  MovieItemVoteAverge,
  MovieItemRelease,
  MovieItemGenresList,
  MovieItemGenresItem,
  MovieItemWrap,
  MovieItemOverview,
  MovieItemOverviewWrap,
} from './MovieItem.styled';

export default function MovieItem({ movieData, moviesGenres }) {
  const location = useLocation();

  return (
    <>
      <MovieItemStyled key={movieData.id}>
        <MovieItemNavLink
          to={`/movies/${movieData.id}`}
          state={{ from: location }}
        >
          <MovieItemImg
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w300${movieData.poster_path}`
                : defaultImg
            }
            alt={movieData.original_title}
            loading="lazy"
          />
          <MovieItemTitle>{movieData.title}</MovieItemTitle>
          <MovieItemVoteAverge>
            {movieData.vote_average?.toFixed(2)}
          </MovieItemVoteAverge>
          <MovieItemOverviewWrap>
            <MovieItemWrap>
              <MovieItemGenresList>
                {movieData.genre_ids?.map((id, index, array) => {
                  if (index <= 1) {
                    const genre = moviesGenres.find(
                      moviesGenre => moviesGenre.id === id
                    );
                    return (
                      <React.Fragment key={id}>
                        <MovieItemGenresItem>
                          {genre.name ?? ''}
                          {index !== array.length - 1 && ','}
                        </MovieItemGenresItem>
                        {index === array.length - 1 && <span>|</span>}
                      </React.Fragment>
                    );
                  } else if (index === 2) {
                    return (
                      <React.Fragment key="other">
                        <MovieItemGenresItem>Other</MovieItemGenresItem>
                        <span>|</span>
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
              </MovieItemGenresList>
              <MovieItemRelease>
                {movieData.release_date?.substring(0, 4)}
              </MovieItemRelease>
            </MovieItemWrap>
            <MovieItemOverview>{movieData.overview}</MovieItemOverview>
          </MovieItemOverviewWrap>
        </MovieItemNavLink>
      </MovieItemStyled>
    </>
  );
}

MovieItem.propTypes = {
  movieData: PropTypes.object.isRequired,
  moviesGenres: PropTypes.array.isRequired,
};
