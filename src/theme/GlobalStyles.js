﻿import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *::before, *::after {
  box-sizing: border-box;
  
}

// happy rems below
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
