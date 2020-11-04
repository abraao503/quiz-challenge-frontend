import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }

  html {
    height: -webkit-fill-available;
  }

  body {
    background-color: #2B2B2B;
  }

  input, button {
    font-family: 'Quicksand', sans-serif;
  }
`;