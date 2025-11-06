import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    margin: 0 auto;
    padding: 0rem;
    text-align: center;
  }

  html, body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #333;
    background-color: #fff;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  p, span, a, li {
    font-weight: 400;
  }

  button, input, textarea, select {
    font-family: inherit;
  }
`;

export default GlobalStyles;