import styled from 'styled-components';

export const Content = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: ${props => props.size || '18px'};
  color: #fff;
  margin-bottom: 18px;
  font-weight: bold;
  text-align: center;
`;

export const List = styled.div`
  margin: 5px 0;
`;

export const Button = styled.button`
  padding: ${props => props.isLoading ? '7.5px 0' : '12px 0'};
  border: 0;
  border-radius: 4px;
  background-color: #6b1fb8;
  color: white;
  font-size: 18px;
  width: 30%;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  font-weight: bold;
  cursor: pointer;

  @media(max-width: 600px) {
    width: 100%;
  }

  :hover {
    opacity: 0.85;
  }
`;