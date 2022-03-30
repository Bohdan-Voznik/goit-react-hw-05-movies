import { Route, Routes } from 'react-router-dom';

import { MoviesPage } from 'components/MoviesPage/MoviesPage';
import { Movies } from 'components/Movies/Movies';
import { Home } from 'components/Home/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/*" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MoviesPage />} />
      </Routes>
    </>
  );
};
