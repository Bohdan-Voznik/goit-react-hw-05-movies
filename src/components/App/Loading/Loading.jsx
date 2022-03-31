import {} from 'react-router-dom';

import { Text } from './Loading.styled';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Container } from 'components/Container/Container';

export default function Loading() {
  return (
    <>
      <Header />
      <Container>
        <Text>Loading...</Text>
      </Container>
      <Footer />
    </>
  );
}
