import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { getDetailsMovies } from 'services/api-movies';
import defaultImg from '../img/img-default-min.jpg';
import {
  IoArrowBackCircleOutlineStyled,
  StyledLink,
  MovieTitle,
  MovieImg,
  MovieDetailsList,
  MovieDetailsItem,
  MovieDetailsItemTitle,
  MovieDetailsDescription,
  MovieDetailsDescriptionSecondary,
  DetailsWrap,
  CompanyList,
  CompanyItem,
  ContainerTabList,
  ContainerTabItem,
  ContainerTabLink,
  ContainerWrap,
  CompanyImg,
  MovieDetailsItemLink,
} from './DetailsMovies.styled';
const CastMoviePage = lazy(() => import('./CastMovie'));
const ReviewsMoviePage = lazy(() => import('./ReviewsMoviePage'));

export default function DetailsMovies() {
  const [detailsMovies, setDetailsMovies] = useState([]);
  const movieId = useParams().movieId;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchDetailsMovies() {
      const response = await getDetailsMovies(movieId);
      setDetailsMovies(response);
    }
    fetchDetailsMovies();
  }, [movieId]);

  if (detailsMovies.length === 0) {
    return;
  }

  return (
    <>
      <ContainerWrap>
        <StyledLink to={backLinkHref.current}>
          <IoArrowBackCircleOutlineStyled />
          Go Back
        </StyledLink>
        <div>
          <MovieTitle>{detailsMovies.title}</MovieTitle>
          <DetailsWrap>
            <MovieImg
              alt={`${detailsMovies.title}`}
              src={
                detailsMovies.poster_path
                  ? `https://image.tmdb.org/t/p/w300${detailsMovies.poster_path}`
                  : defaultImg
              }
            />
            <MovieDetailsList>
              <MovieDetailsItem>
                <MovieDetailsItemTitle>Genres:</MovieDetailsItemTitle>
                {detailsMovies.genres?.map((genre, index, array) => (
                  <MovieDetailsDescription key={genre.id}>
                    {genre.name}
                    {index !== array.length - 1 && ','}
                  </MovieDetailsDescription>
                ))}
              </MovieDetailsItem>
              <MovieDetailsItem>
                <MovieDetailsItemTitle>Time:</MovieDetailsItemTitle>
                <MovieDetailsDescription>
                  {detailsMovies.runtime
                    ? `${Math.floor(Number(detailsMovies.runtime) / 60)}hr ${
                        Number(detailsMovies.runtime) % 60
                      }min`
                    : 'The duration is not specified'}
                </MovieDetailsDescription>
              </MovieDetailsItem>
              <MovieDetailsItem>
                <MovieDetailsItemTitle>Rating:</MovieDetailsItemTitle>
                <MovieDetailsDescription>
                  {detailsMovies.vote_average?.toFixed(2) + ' /10'}
                </MovieDetailsDescription>
                <MovieDetailsDescriptionSecondary>
                  {detailsMovies.vote_count >= 1000
                    ? `${(detailsMovies.vote_count / 1000).toFixed(1)}k votes`
                    : detailsMovies.vote_count + 'k votes'}
                </MovieDetailsDescriptionSecondary>
              </MovieDetailsItem>
              <MovieDetailsItem>
                <MovieDetailsItemTitle>Date of release:</MovieDetailsItemTitle>
                <MovieDetailsDescription>
                  {detailsMovies.release_date}
                </MovieDetailsDescription>
              </MovieDetailsItem>
              <MovieDetailsItem>
                <MovieDetailsItemTitle>About the movie:</MovieDetailsItemTitle>
                <MovieDetailsDescription>
                  {detailsMovies.overview}
                </MovieDetailsDescription>
              </MovieDetailsItem>
              {detailsMovies.homepage && (
                <MovieDetailsItem>
                  <MovieDetailsItemTitle>
                    Watch officially:
                  </MovieDetailsItemTitle>
                  <MovieDetailsItemLink
                    href={detailsMovies.homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`Look now on - `}
                    {detailsMovies.homepage}
                  </MovieDetailsItemLink>
                </MovieDetailsItem>
              )}

              {detailsMovies.production_companies.length !== 0 && (
                <MovieDetailsItem>
                  <MovieDetailsItemTitle>
                    Production companies:
                  </MovieDetailsItemTitle>
                  <CompanyList>
                    {detailsMovies.production_companies.map(company => {
                      return company.logo_path ? (
                        <CompanyItem key={company.id}>
                          <CompanyImg
                            src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
                            alt={company.name}
                          />
                        </CompanyItem>
                      ) : (
                        <p key={company.name}>{company.name}</p>
                      );
                    })}
                  </CompanyList>
                </MovieDetailsItem>
              )}
            </MovieDetailsList>
          </DetailsWrap>
        </div>
      </ContainerWrap>
      <ContainerTabList>
        <ContainerTabItem>
          <ContainerTabLink to="cast">Cast</ContainerTabLink>
        </ContainerTabItem>
        <ContainerTabItem>
          <ContainerTabLink to="reviews">Reviews</ContainerTabLink>
        </ContainerTabItem>
      </ContainerTabList>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="cast" element={<CastMoviePage />} />
          <Route path="reviews" element={<ReviewsMoviePage />} />
        </Routes>
      </Suspense>
    </>
  );
}
