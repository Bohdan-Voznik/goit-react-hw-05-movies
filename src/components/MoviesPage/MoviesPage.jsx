import { useState, useEffect } from 'react';
import { Route, Routes, useParams, useLocation } from 'react-router-dom';

import {
  Section,
  Content,
  Wraper,
  Img,
  Table,
  Td,
  Title,
  Overview,
  OverviewText,
  Button,
} from './MoviesPage.styled';

import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { Cast } from 'components/MoviesPage/Cast/Cast';
import { Reviews } from 'components/MoviesPage/Reviews/Reviews';
import { Footer } from 'components/Footer/Footer';
import { BackButton } from 'components/BackButton/BackButton';

import { fetchMovieById } from 'js/fechAPI';

export const MoviesPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetchMovieById(movieId).then(setFilm);
  }, [movieId]);
  const { useScore, genres, overview, title = '', img } = film;

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Content>
            <Img src={img} />
            <Wraper>
              <Title>{title}</Title>
              <Table>
                <tbody>
                  <tr>
                    <td>User Score</td>
                    <Td>{useScore}%</Td>
                  </tr>
                  <tr>
                    <td>Genres</td>
                    <Td>{genres}</Td>
                  </tr>
                </tbody>
              </Table>
              <Overview>Overview</Overview>
              <OverviewText>{overview}</OverviewText>

              <Content>
                <Button to="cast" state={location.state}>
                  Cast
                </Button>
                <Button to="reviews" state={location.state}>
                  Reviews
                </Button>
              </Content>
            </Wraper>
          </Content>
        </Container>
      </Section>

      <Routes>
        <Route path="cast" element={<Cast title={title} />} />
        <Route path="reviews" element={<Reviews title={title} />} />
      </Routes>

      <Footer />
      {location.state !== null && <BackButton />}
    </>
  );
};
