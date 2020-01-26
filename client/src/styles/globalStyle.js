import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', sans-serif;

    &:focus {
      outline: 0;
    }
  }
`

export default GlobalStyle;
