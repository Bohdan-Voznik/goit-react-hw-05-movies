import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { FormSerch } from 'components/Header/FormSerch/FormSerch';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { Footer } from 'components/Footer/Footer';

import { fetchMoviesByTag } from 'js/fechAPI';

export default function Movies() {
  const [serchParams, setSerchParams] = useSearchParams();

  const [serchQuery, setSerchQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setSerchQuery(serchParams.get('query') || '');
  }, [serchParams]);

  useEffect(() => {
    if (serchQuery === '') {
      setFilms([]);
      return;
    }
    setSerchParams({ query: serchQuery });

    fetchMoviesByTag(serchQuery)
      .then(response => {
        if (!response.length) {
          throw Error(
            'Search result not successful. Enter the correct movie name'
          );
        }
        setFilms(response);
      })
      .catch(error => {
        errorMessage(error);
      });
  }, [serchQuery, setSerchParams]);

  const errorMessage = err => {
    setError(err);
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <>
      <Header>
        <FormSerch formSubmit={setSerchQuery} error={error} />
      </Header>
      {films.length !== 0 && <FilmsList films={films} />}
      <Footer />
    </>
  );
}
