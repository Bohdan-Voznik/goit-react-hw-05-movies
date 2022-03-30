import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  background: #f7f7f7;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
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

export const Authors = styled.h3`
  margin: 0 0 20px 0;
  font-size: 14px;
  line-height: 1.33;
  font-weight: 500;
  text-transform: uppercase;

  & span {
    text-transform: none;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.33;
`;
