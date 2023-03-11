/* eslint-disable import/no-cycle */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import NotFoundBlock from './Components/NotFoundBlock/index.jsx';
import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import './scss/app.scss';
import { useSelector, useDispatch } from 'react-redux';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  // const filter = useSelector((state) => state.filter.value);
  // const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFoundBlock />} />
          </Routes>

        </div>
      </SearchContext.Provider>
    </div>

  );
}

export default App;
