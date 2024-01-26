import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className='toast-container' />
      </BrowserRouter>
    </Router>
  );
}

export default App;
