/* eslint-disable import/no-unresolved */
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './scss/app.scss';
import MainLayout from './Layouts/MainLayout';

const Cart = React.lazy(() => import('./Pages/Cart'));
const FullPizza = React.lazy(() => import('./Pages/FullPizza'));
const NotFound = React.lazy(() => import('./Pages/NotFound'));

function App() {
  return (

    <Routes>
      <Route path='/' element={<MainLayout />}>

        <Route path='' element={<Home />} />

        <Route path='cart' element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <Cart />
          </Suspense>
        }/>

        <Route path='pizza/:id' element={
          <Suspense fallback={<div>Идет загрузка...</div>}>
            <FullPizza />
          </Suspense>
        }/>

        <Route path='*' element={
          <Suspense>
            <NotFound />
          </Suspense>
        }/>

      </Route>
    </Routes>

  );
}

export default App;
