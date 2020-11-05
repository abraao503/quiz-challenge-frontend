import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';

import { Container, Button } from '../../styles';
import { Content, Text, List } from './styles';
import Footer from '../../components/Footer';

import Question from './Question';
import api from '../../services/api';
import getUserFromLocalStorage from '../../utils/getUserFromLocalStorage';
import removeUserFromLocalStorage from '../../utils/removeUserFromLocalStorage';

function Quiz() {
  const [name, setName] = useState('');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    loadQuestionnaire();
    setUser(getUserFromLocalStorage());
  }, []);

  async function loadQuestionnaire(){
    const { data: questionnaire } = await api.get('/questionnaires/1');
    
    setName(questionnaire.name);
    setQuestions(questionnaire.questions);
  }

  function toggleQuestion(id){
    if(selectedQuestions.includes(id)){
      let selectedQuestionsCopy = [...selectedQuestions];
      const idIndex = selectedQuestions.indexOf(id);

      selectedQuestionsCopy.splice(idIndex, 1);

      setSelectedQuestions(selectedQuestionsCopy);
    } else {
      setSelectedQuestions([id, ...selectedQuestions]);
    }
  }

  async function handleSubmit(){
    if(loading) {
      return;
    }

    setLoading(true);

    try {
      const { data: score } = await api.post('/answers/1', { 
        questions: selectedQuestions,
        userId: user.id,
      });

      removeUserFromLocalStorage();

      history.push('/ranking', {
        scoreId: score.id,
      });

    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <Container>
      <Content>
        <Text>
          {`What a beautiful name, ${user.name}! Now, please answer the following question and we're good.`}
        </Text>
        <Text size='20px'>{name}</Text>
        <List>
          {questions.map(question => (
            <Question 
              text={question.content} 
              key={question.id} 
              onClick={() => toggleQuestion(question.id)} 
            />
          ))}
        </List>
        <Button 
          onClick={handleSubmit} 
          isLoading={loading}
          disabled={loading}
        >
          {loading ? <Loader type="Bars" color="#FFF" height={30} width={30} /> : 'Submit'}
        </Button>
      </Content>
      <Footer />
    </Container>
  );
}

export default Quiz;