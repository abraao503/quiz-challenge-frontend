import React from 'react';

import { Container, Text } from './styles';

function Score({points, username, position, highlight}) {
  function chooseColor(){    
    switch (position) {
      case 1:
        return '#ffd700';
      case 2:
        return '#c0c0c0';
      case 3:
        return '#cd7f32';
      default:
        return '#000';
    }
  }

  return (
    <Container positionColor={chooseColor} highlight={highlight}>
      <Text>{position}</Text>
      <Text>{username}</Text>
      <Text>{points}</Text>
    </Container>
  );
}

export default Score;