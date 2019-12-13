import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import App from './Pages/App';

ReactDOM.render(
  <>
  <GlobalStyle />
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  </>
, document.getElementById('root'));

