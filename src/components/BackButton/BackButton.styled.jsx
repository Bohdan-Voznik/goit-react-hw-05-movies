import styled from '@emotion/styled';
export const Button = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 30px;
  left: 30px;
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border: 3px solid #000000;
  border-radius: 50%;
  color: #000000;

  &:hover {
    cursor: pointer;
    background-color: #ff6b08;
    border: 3px solid #ff6b08;
    color: #ffffff;
  }
`;
