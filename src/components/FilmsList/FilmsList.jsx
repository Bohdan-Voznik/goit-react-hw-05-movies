import { List, Section, Wraper } from './FilmsList.styled';
import PropTypes from 'prop-types';

import { FilmItem } from './FilmItem/FilmItem';
import { Container } from 'components/Container/Container';

export const FilmsList = ({ films }) => {
  return (
    <Section>
      <Container>
        <Wraper>
          <List>
            {films.map(({ id, title, img, reliseData, genres }) => {
              return (
                <FilmItem
                  key={id}
                  id={id}
                  title={title}
                  img={img}
                  reliseData={reliseData}
                  genres={genres}
                />
              );
            })}
          </List>
        </Wraper>
      </Container>
    </Section>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      reliseData: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
    })
  ),
};
