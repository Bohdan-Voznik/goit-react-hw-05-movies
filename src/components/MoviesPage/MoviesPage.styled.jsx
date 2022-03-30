import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Wraper = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
`;

export const Img = styled.img`
  display: block;

  min-width: 396px;
  margin: 0 50px 0 0;
  border-radius: 5px;

  object-fit: cover;
`;

export const Title = styled.h3`
  margin: 0 0 10px 0;
  font-size: 30px;
  line-height: 1.16;
  text-transform: uppercase;
  color: #000000;
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;

  border-collapse: separate;
  border-spacing: 0px 10px;
  color: #8c8c8c;
`;

export const Td = styled.td`
  padding-left: 40px;
  color: #000000;
`;

export const Overview = styled.h4`
  margin-bottom: 10px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const OverviewText = styled.p`
  max-height: 330px;
  overflow: auto;
  margin-bottom: 30px;
  line-height: 1.67;
`;

export const Button = styled(NavLink)`
  text-decoration: none;
  padding-top: 14px;
  padding-bottom: 14px;

  width: 136px;

  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.1;

  background-color: #ffffff;
  color: #000000;

  border: 1px solid #000000;
  border-radius: 5px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:focus,
  &:hover {
    cursor: pointer;
    background-color: #ff6b01;
    color: #ffffff;
    border: 1px solid #ff6b01;
  }

  &.active {
    background-color: #ff6b01;
    color: #ffffff;
    border: 1px solid #ff6b01;
  }

  & span {
    display: block;
  }
`;
