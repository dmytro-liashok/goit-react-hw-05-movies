import { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getGenresMovieList } from '../services/api-movies';
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const DetailsMoviesPage = lazy(() => import('../pages/DetailsMovies'));
const Navigation = lazy(() => import('../components/Navigation/Navigation'));
const Loader = lazy(() => import('../components/Loader/Loader'));

export const App = () => {
  const [moviesGenres, setMoviesGenres] = useState([]);

  useEffect(() => {
    async function fetchGenresMovies() {
      const response = await getGenresMovieList();
      setMoviesGenres(response.genres);
    }
    fetchGenresMovies();
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <Navigation />
        </div>
      </header>
      <main>
        <div className="container">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                element={<HomePage moviesGenres={moviesGenres} />}
              />
              <Route
                path="/movies"
                element={<MoviesPage moviesGenres={moviesGenres} />}
              />
              <Route
                path="/movies/:movieId/*"
                element={<DetailsMoviesPage />}
              />
            </Routes>
          </Suspense>
        </div>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
