import styled from 'styled-components';

export const List = styled.div`
  width: 60%;
  margin: 20px 0 30px;

  @media(max-width: 1000px) {
    width: 80%;
  }

  @media(max-width: 700px) {
    width: 100%;
  }
`;

export const ListHeader = styled.div`
  background-color: #815CD1;
  display: grid;
  grid-template-columns: 80px 1fr 150px;
  margin-bottom: 10px;
  align-items: center;
  padding: 10px 0 8px 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media(max-width: 400px) {
    grid-template-columns: 45px 1fr 58px;
  }
`;

export const ListHeaderText = styled.p`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: #fff;
`;