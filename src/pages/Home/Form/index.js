import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { Container, Input, Button } from './styles';
import api from '../../../services/api';
import setUserToLocalStorage from '../../../utils/setUserToLocalStorage';

function Form() {
  const [name, setName] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function nameIsFilled(name){
    return name.split(' ').join('').length;
  }

  function changeNameInput(value){
    setName(value);
    setButtonDisabled(nameIsFilled(value) ? false : true);
  }

  async function handleSubmit(e){
    e.preventDefault();

    if(loading) {
      return;
    }

    setLoading(true);

    try {
      const { data: user } = await api.post('/users', { name });
      setUserToLocalStorage(user);
      history.push('/quiz');
    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <Container onSubmit={e => handleSubmit(e)}>
      <Input 
        autoFocus
        value={name} 
        onChange={e => changeNameInput(e.target.value)} 
        placeholder="Your name here" 
      />
      <Button 
        isLoading={loading}
        disabled={buttonDisabled}
      >
        {loading ? <Loader type="Bars" color="#FFF" height={30} width={30} /> : 'Submit'}
      </Button>
    </Container>
  )
}

export default Form;