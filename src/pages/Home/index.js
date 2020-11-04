import React from 'react';

import { Title } from './styles';
import { Container } from '../../styles';
import Form from './Form';
import Footer from '../../components/Footer';

function Home() {
  return (
    <Container>
      <Title>
        Hey there, its nice to see you here! Please, tell me your name: 
      </Title>
      <Form />
      <Footer />
    </Container>
  );
}

export default Home;