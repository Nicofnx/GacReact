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
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;