import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  margin: 30px 0;
  width: 45%;

  @media(max-width: 1000px) {
    width: 70%;
  }

  @media(max-width: 600px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid #815CD1;
  background-color: transparent;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;

  ::placeholder { 
    color: #ccc;
    opacity: 1;
  }
`;

export const Button = styled.button`
  padding: ${props => props.isLoading ? '7.5px 0' : '12px 0'};
  border: 0;
  border-radius: 4px;
  background-color: #815CD1;
  color: white;
  font-size: 18px;
  margin-top: 20px;
  width: 30%;
  align-self: flex-end;
  transition: 0.3s;
  font-weight: bold;
  cursor: pointer;

  @media(max-width: 600px) {
    width: 100%;
  }

  :disabled {
    cursor: not-allowed;
    background-color: #999;
  }

  :enabled:hover {
      opacity: 0.85;
  }

  div {
    display: flex;
    justify-content:center;
  }
`;