import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Section, List, Item, Authors, Text } from './Reviews.styled';
import { Container } from 'components/Container/Container';
import { Default } from 'components/MoviesPage/Default/Default';

import { fetchReviews } from 'js/fechAPI';

export default function Reviews({ title }) {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <Section>
      <Container>
        {reviews.length !== 0 ? (
          <List>
            {reviews.map(({ id, author, content }) => {
              return (
                <Item key={id}>
                  <Authors>
                    Authors: <span>{author}</span>{' '}
                  </Authors>
                  <Text>{content}</Text>
                </Item>
              );
            })}
          </List>
        ) : (
          <Default text={`Sorry, no reviews for "${title}" have been found.`} />
        )}
      </Container>
    </Section>
  );
}

Reviews.propTypes = {
  title: PropTypes.string.isRequired,
};
