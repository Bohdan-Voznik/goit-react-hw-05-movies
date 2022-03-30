import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  flex-basis: calc((100% - 60px) / 3);
  margin: 10px;
  border-radius: 5px;

  &:hover,
  &:focus {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    cursor: pointer;
    transform: scale(1.02);
  }
`;
export const FilmLin = styled(Link)`
  text-decoration: none;
`;

export const Img = styled.img`
  //   border-radius: 5px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding-top: 7px;
  padding-left: 3px;
  padding-bottom: 3px;

  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export const Name = styled.h2`
  text-transform: uppercase;
  color: #000000;
  margin: 0;
`;

export const Genres = styled.p`
  color: #ff6b08;
`;
