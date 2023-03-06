import React from 'react'
import Header from './Components/Header/Header.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Sort from './Components/Sort/Sort.jsx'
import Card from './Components/Card/Card.jsx'

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
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
