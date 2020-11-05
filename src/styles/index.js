import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;
  position: relative;
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