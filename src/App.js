import React from 'react'
import Header from './Components/Header/Header.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Sort from './Components/Sort/Sort.jsx'
import Card from './Components/Card/Card.jsx'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
