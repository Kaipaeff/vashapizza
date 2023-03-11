import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import Header from './Components/Header/Header.jsx';
import NotFoundBlock from './Components/NotFoundBlock/index.jsx';
// eslint-disable-next-line import/no-cycle
import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

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
