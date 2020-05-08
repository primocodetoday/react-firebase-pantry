import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *::before, *::after {
  box-sizing: border-box;
  ;
}
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;
