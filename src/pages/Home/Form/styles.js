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