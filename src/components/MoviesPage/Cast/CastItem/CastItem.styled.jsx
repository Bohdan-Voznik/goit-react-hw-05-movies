import styled from '@emotion/styled';

export const Item = styled.li`
  flex-basis: calc((100% - 210px) / 3);
  margin: 15px;
  padding: 20px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;

  box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

export const Img = styled.img`
  object-fit: cover;
  margin-bottom: 12px;
`;

export const Name = styled.h3`
  margin: 0 0 10px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;

  text-transform: uppercase;
`;

export const Wraper = styled.div`
  display: flex;
`;

export const Characror = styled.p`
  margin: 0 10px 0px 0;
  color: #8c8c8c;
`;
export const Text = styled.p`
  margin: 0;
`;
