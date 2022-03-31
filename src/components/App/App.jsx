import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from './Loading/Loading';

const Home = lazy(() => import('../Home/Home'));
const Movies = lazy(() => import('../Movies/Movies'));
const MoviesPage = lazy(() => import('../MoviesPage/MoviesPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/*" element={<Movies />} />
          <Route path="movies/:movieId/*" element={<MoviesPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
