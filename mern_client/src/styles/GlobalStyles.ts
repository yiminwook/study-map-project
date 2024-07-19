import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  #root {
    height: 100%;
  }

  input:focus {
    outline: none;
  }
`;

export default GlobalStyles;
