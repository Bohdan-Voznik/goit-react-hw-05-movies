import { ContainerDiv } from './Container.styled';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
