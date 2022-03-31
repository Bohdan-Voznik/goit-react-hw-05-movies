import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Section, List } from './Cast.styled';

import { Container } from 'components/Container/Container';
import { CastItem } from './CastItem/CastItem';
import { Default } from 'components/MoviesPage/Default/Default';

import { fetchCast } from 'js/fechAPI';

export default function Cast({ title }) {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(setActors);
  }, [movieId]);

  return (
    <Section>
      <Container>
        {actors.length !== 0 ? (
          <List>
            {actors.map(({ id, name, character, img }) => {
              return (
                <CastItem
                  key={id}
                  name={name}
                  character={character}
                  img={img}
                />
              );
            })}
          </List>
        ) : (
          <Default
            text={`Unfortunately, no information about the cast of the movie "${title}" was found.`}
          />
        )}
      </Container>
    </Section>
  );
}

Cast.ptopType = {
  title: PropTypes.string.isRequired,
};
