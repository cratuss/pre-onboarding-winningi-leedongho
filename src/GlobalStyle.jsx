import reset from 'styled-reset';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }

  body {
    position: relative;
    background: #FFFFFF;
    color : #000000;
    font-family: 'Noto Sans KR', sans-serif;
  } 
`;

export default GlobalStyle;
