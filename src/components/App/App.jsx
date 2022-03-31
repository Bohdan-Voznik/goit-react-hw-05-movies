import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const Home = React.lazy(() => import('../Home/Home'));
const Movies = React.lazy(() => import('../Movies/Movies'));
const MoviesPage = React.lazy(() => import('../MoviesPage/MoviesPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/*" element={<Movies />} />
          <Route path="movies/:movieId/*" element={<MoviesPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
