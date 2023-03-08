import React from 'react';
// import { Routes, Router } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Home from './Pages/Home.jsx';
import NotFound from './Pages/NotFound.jsx';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home />
          <NotFound />
        </div>
      </div>
    </div>

  );
}

export default App;
