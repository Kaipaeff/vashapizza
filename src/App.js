import React from 'react';
import Header from './Components/Header/Header.jsx';
import Categories from './Components/Categories/Categories.jsx';
import Sort from './Components/Sort/Sort.jsx';
import Card from './Components/Card/Card.jsx';
import Skeleton from './Components/Card/Skeleton.jsx';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      await fetch('https://6318d0cb6b4c78d91b2fe4ef.mockapi.io/items')
        .then((response) => response.json())
        .then((items) => setPizzas(items));
      setIsLoading(false);
    })();
  }, []);

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
            {/* {pizzas.map((el) => (
              !isLoading ? <Skeleton /> : <Card key={el.id} {...el} />
            ))} */}
            {isLoading
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : pizzas.map((el) => (<Card key={el.id} {...el} />))
            }
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
