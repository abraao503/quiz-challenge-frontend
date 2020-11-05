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