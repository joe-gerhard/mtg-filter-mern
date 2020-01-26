import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import App from './Pages/App';


ReactDOM.render(
  <>
  <GlobalStyle />
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
  </>
, document.getElementById('root'));

