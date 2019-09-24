import React from 'react';
import { Container } from './template/container';
import { default as Header } from './template/header';
import { Home } from './template/home';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './app/routes';
import { GlobalStyle } from './template/theme';
import { NavBar } from './template/navbar';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Header />
        <NavBar />
        <Home>
          <Routes />
        </Home>
      </Container>
    </Router>
  );
}

export default App;
