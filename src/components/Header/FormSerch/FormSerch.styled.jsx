import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  text-align: center;
`;

export const Input = styled.input`
  width: 336px;
  display: inline-block;

  font-size: 14px;
  line-height: 1.14;

  background-color: transparent;
  border: transparent;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;

  &::placeholder {
    color: #ffffff;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #ff6b08;

    &::placeholder {
      color: #ff6b08;
    }
    & ~ button {
      color: #ff6b08;
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  position: absolute;

  top: 0;
  right: 0;
  padding: 0;
  right: 273px;

  background-color: transparent;
  border: none;

  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;
export const Text = styled.p`
  font-size: 14px;
  line-height: 1.17;
  font-weight: 400;
  color: red;
  margin-top: 22px;
`;
