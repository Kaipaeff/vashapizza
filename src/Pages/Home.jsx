/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// import qs from 'qs';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { setItems } from '../redux/slices/PizzaSlice';

import Categories from '../Components/Categories/Categories.jsx';
import Sort from '../Components/Sort/Sort.jsx';
import Card from '../Components/Card/Card.jsx';
import Skeleton from '../Components/Card/Skeleton.jsx';
import Pagination from '../Components/Pagination/Pagination.jsx';
import { SearchContext } from '../App';

export default function Home() {
  const { searchValue } = React.useContext(SearchContext);
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const { items } = useSelector((state) => state.pizza.pizzas);

  // const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);

      const sortBy = sort.sortProperty.replace('-', '');
      const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
      const category = categoryId > 0 ? `category=${categoryId}` : '';

      // await fetch(`https://6318d0cb6b4c78d91b2fe4ef.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`)
      //   .then((response) => response.json())
      //   .then((items) => setPizzas(items));
      // setIsLoading(false);

      try {
        const res = await axios.get(`https://6318d0cb6b4c78d91b2fe4ef.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`);

        // setPizzas(res.data);
        dispatch(setItems(res.data));
      } catch (error) {
        alert('Ошибка получения данных с сервера mockAPI');
        console.log('Error get data from server', error);
      } finally {
        setIsLoading(false);
      }
    }
    )();
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

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
              : items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((el) => <Card key={el.id} {...el} />)
            }
          </div>
          <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  );
}
