import { Suspense, lazy } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import HomePage from '../pages/Home';
// import MoviesPage from '../pages/Movies';
// import DetailsMoviesPage from 'pages/DetailsMovies';
const HomePage = lazy(() => import('../pages/Home'));
const MoviesPage = lazy(() => import('../pages/Movies'));
const DetailsMoviesPage = lazy(() => import('../pages/DetailsMovies'));

export const App = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<DetailsMoviesPage />} />
          </Routes>
        </Suspense>
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
    </div>
  );
};
