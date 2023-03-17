/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import { Routes, Route } from 'react-router-dom';
import NotFoundBlock from './Components/NotFoundBlock/index.jsx';
import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import FullPizza from './Pages/FullPizza';
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
