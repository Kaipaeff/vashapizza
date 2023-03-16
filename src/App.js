/* eslint-disable import/no-cycle */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundBlock from './Components/NotFoundBlock/index.jsx';
import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import FullPizza from './Pages/FullPizza.jsx';
import './scss/app.scss';
import MainLayout from './Layouts/MainLayout.jsx';

function App() {
  return (

    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='pizza/:id' element={<FullPizza />} />
        <Route path='*' element={<NotFoundBlock />} />
      </Route>
    </Routes>

  );
}

export default App;
