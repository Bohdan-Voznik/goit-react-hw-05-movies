import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Item, FilmLin, Img, Info, Name, Genres } from './FilmItem.styled';

export const FilmItem = ({ id, title, img, reliseData, genres }) => {
  const location = useLocation();
  return (
    <Item>
      <FilmLin to={`/movies/${id}`} state={location}>
        <Img src={img} alt={title} width="280px" height="402px"></Img>
        <Info>
          <Name>{title}</Name>
          <Genres>{`${genres} | ${reliseData}`}</Genres>
        </Info>
      </FilmLin>
    </Item>
  );
};

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  reliseData: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};
