import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import { Container } from '../../styles';
import { List, ListHeader, ListHeaderText } from './styles';
import Score from './Score';

import api from '../../services/api';

function Ranking({location}) {
  const [scores, setScores] = useState([]);
  const [scoreId, setScoreId] = useState(0);
  
  useEffect(() => {
    if(location.state){
      setScoreId(location.state.scoreId);
    }
  }, [location.state]);
  
  useEffect(() => {
    loadScores();
  }, []);

  async function loadScores(){
    const { data } = await api.get('/scores');
    setScores(data);
  }

  function needHighlight(currentScoreId){
    return currentScoreId === scoreId;
  }

  return (
    <Container>
      <List>
        <ListHeader>
          <ListHeaderText>Pos.</ListHeaderText>
          <ListHeaderText>Username</ListHeaderText>
          <ListHeaderText>Score</ListHeaderText>
        </ListHeader>
        {scores.map((score, index) => (
          <Score
            points={score.points}
            username={score.user.name}
            position={index+1}
            key={score.id}
            highlight={needHighlight(score.id)}
          />
        ))}
      </List>
      <Footer />
    </Container>
  );
}

export default Ranking;