import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  HeaderBg,
  Navigation,
  Logo,
  LogoTag,
  NavigationList,
  NavigationItem,
  Link,
} from './Header.styled';

import { Container } from 'components/Container/Container';

import { ReactComponent as LogoIcon } from '../../img/logo.svg';

export const Header = ({ children }) => {
  const location = useLocation();
  return (
    <header>
      <HeaderBg>
        <Container>
          <Navigation>
            <Logo>
              <LogoIcon />
              <LogoTag>Filmoteka</LogoTag>
            </Logo>
            <NavigationList>
              <NavigationItem>
                <Link to="/" state={location}>
                  Home
                </Link>
              </NavigationItem>
              <NavigationItem>
                <Link to="/movies" state={location}>
                  Movies
                </Link>
              </NavigationItem>
            </NavigationList>
          </Navigation>
          {children}
        </Container>
      </HeaderBg>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.element,
};
