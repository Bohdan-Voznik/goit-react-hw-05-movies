import { FooterBg, Text } from './Footer.styled';

import { Container } from 'components/Container/Container';

import { ReactComponent as Like } from '../../img/like.svg';

export const Footer = () => {
  return (
    <FooterBg>
      <Container>
        <Text>
          © 2020 | All Rights Reserved | Developed with
          <span>
            <Like />
          </span>
          by GoIT Student
        </Text>
      </Container>
    </FooterBg>
  );
};
