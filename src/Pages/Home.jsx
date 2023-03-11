/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

import Categories from '../Components/Categories/Categories.jsx';
import Sort from '../Components/Sort/Sort.jsx';
import Card from '../Components/Card/Card.jsx';
import Skeleton from '../Components/Card/Skeleton.jsx';
import Pagination from '../Components/Pagination/Pagination.jsx';
import { SearchContext } from '../App';

export default function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);

      const sortBy = sort.sortProperty.replace('-', '');
      const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
      const category = categoryId > 0 ? `category=${categoryId}` : '';

      await fetch(`https://6318d0cb6b4c78d91b2fe4ef.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`)
        .then((response) => response.json())
        .then((items) => setPizzas(items));
      setIsLoading(false);
    })();
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, currentPage]);

  return (
    <div className='container'>
      <div className="content__top">
            <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
            <Sort />
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
