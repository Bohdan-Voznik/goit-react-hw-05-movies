import PropTypes from 'prop-types';

import { Item, Img, Name, Wraper, Characror, Text } from './CastItem.styled';

export const CastItem = ({ name, character, img }) => {
  return (
    <Item>
      <Img src={img} alt="" width="234px" height="" />
      <Name>{name}</Name>
      <Wraper>
        <Characror>Characror:</Characror>
        <Text> {character} </Text>
      </Wraper>
    </Item>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
