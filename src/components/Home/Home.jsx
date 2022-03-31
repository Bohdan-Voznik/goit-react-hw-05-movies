import { useState, useEffect } from 'react';
import {} from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { Footer } from 'components/Footer/Footer';

import { fetchTrending } from 'js/fechAPI';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrending().then(setFilms);
  }, []);

  return (
    <>
      <Header />
      <FilmsList films={films} />
      <Footer />
    </>
  );
}
