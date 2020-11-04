import React from 'react';

import { Container, Text, Checkmark, Input } from './styles';

function Question({ text, onClick }) {
  return (
    <Container> 
      <Input type="checkbox" onClick={onClick} />
      <Checkmark />
      <Text>{text}</Text>
    </Container>
  );
}

export default Question;