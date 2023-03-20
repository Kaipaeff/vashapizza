/* eslint-disable import/no-unresolved */
import { Routes, Route } from 'react-router-dom';
import NotFoundBlock from './Components/NotFoundBlock/index';
// @ts-ignore
import Home from './Pages/Home.tsx';
// @ts-ignore
import Cart from './Pages/Cart.tsx';
import FullPizza from './Pages/FullPizza';
import './scss/app.scss';
// @ts-ignore
import MainLayout from './Layouts/MainLayout.tsx';

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
