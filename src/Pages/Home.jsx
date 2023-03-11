/* eslint-disable max-len */
import React from 'react';

import Categories from '../Components/Categories/Categories.jsx';
import Sort from '../Components/Sort/Sort.jsx';
import Card from '../Components/Card/Card.jsx';
import Skeleton from '../Components/Card/Skeleton.jsx';
import Pagination from '../Components/Pagination/Pagination.jsx';
// eslint-disable-next-line import/no-cycle
import { SearchContext } from '../App';

export default function Home() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'по популярности',
    sortProperty: 'rating',
  });
  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);

      const sortBy = sortType.sortProperty.replace('-', '');
      const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
      const category = categoryIndex > 0 ? `category=${categoryIndex}` : '';

      await fetch(`https://6318d0cb6b4c78d91b2fe4ef.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`)
        .then((response) => response.json())
        .then((items) => setPizzas(items));
      setIsLoading(false);
    })();
    window.scrollTo(0, 0);
  }, [categoryIndex, sortType, currentPage]);

  return (
    <div className='container'>
      <div className="content__top">
            <Categories value={categoryIndex} onChangeCategory={(i) => setCategoryIndex(i)}/>
            <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : pizzas.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((el) => <Card key={el.id} {...el} />)
            }
          </div>
          <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </div>
  );
}
