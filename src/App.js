/* eslint-disable import/no-cycle */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import NotFoundBlock from './Components/NotFoundBlock/index.jsx';
import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import FullPizza from './Pages/FullPizza.jsx';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pizza/:id' element={<FullPizza />} />
          <Route path='*' element={<NotFoundBlock />} />
        </Routes>

      </div>
    </div>

  );
}

export default App;
