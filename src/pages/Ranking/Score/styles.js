import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px 0;
  background-color: ${props => props.highlight ? '#f1f1f1' : '#866DBA'};
  color: ${props => props.highlight ? '#333' : '#fff'};
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 80px 1fr 150px;
  position: relative;
  border-left: 8px solid ${props => props.positionColor};
  border-radius: 8px;

  @media(max-width: 400px) {
    grid-template-columns: 45px 1fr 58px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
