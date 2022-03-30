import { Text, Img } from './Default.styled';

import image from '../../../img/image 1.png';

export const Default = ({ text }) => {
  return (
    <>
      <Text>{text}</Text>
      <Img src={image} alt="" />
    </>
  );
};
