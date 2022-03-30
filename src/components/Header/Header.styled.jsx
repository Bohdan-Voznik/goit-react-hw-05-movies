import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import bgImg from '../../img/header-bg.jpg';

export const HeaderBg = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  min-height: 170px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url(${bgImg});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 70px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.17;
  text-transform: uppercase;
  color: white;
`;
export const Logo = styled.div`
  /* cursor: pointer; */
`;

export const LogoTag = styled.span`
  margin-left: 10px;

  font-size: 30px;
  line-height: 1.17;
`;

export const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  //   align-items: center;
`;

export const NavigationItem = styled.li`
  &:not(:last-child) {
    margin-right: 18px;
  }
`;

export const Link = styled(NavLink)`
  position: relative;
  cursor: pointer;
  color: #ffffff;
  text-decoration: none;

  &:hover::after {
    content: '';

    position: absolute;
    bottom: -3px;
    left: 0;

    height: 3px;
    width: 100%;

    background-color: #ff6b08;
  }

  &.active::after {
    content: '';

    position: absolute;
    bottom: -3px;
    left: 0;

    height: 3px;
    width: 100%;

    background-color: #ff6b08;
  }
`;
