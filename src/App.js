import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import NotFoundBlock from './Components/NotFoundBlock/index.jsx';
import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">

        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFoundBlock />} />
          </Routes>
        </div>

      </div>
    </div>

  );
}

export default App;
