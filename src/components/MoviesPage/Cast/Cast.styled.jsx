import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  background: #f7f7f7;
`;

export const List = styled.ul`
  margin: -15px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;

  padding: 20px 40px 20px 40px;

  background: #ffffff;
  box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
