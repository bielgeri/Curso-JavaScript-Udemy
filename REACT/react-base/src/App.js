import React from 'react';
import { Router } from 'react-router-dom';

import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
