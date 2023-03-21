/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import qs from 'qs';
import {
  selectFilter, setCategoryId, setCurrentPage, setFilters,
} from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizzaData } from '../redux/slices/PizzaSlice';
// @ts-ignore
import Categories from '../Components/Categories/Categories.tsx';
// @ts-ignore
import Sort, { list } from '../Components/Sort/Sort.tsx';
// @ts-ignore
import Card from '../Components/Card/Card.tsx';
// @ts-ignore
import Skeleton from '../Components/Card/Skeleton.tsx';
// @ts-ignore
import Pagination from '../Components/Pagination/Pagination.tsx';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const {
    categoryId, sort, currentPage, searchValue,
  } = useSelector(selectFilter);

  const { items, status } = useSelector(selectPizzaData);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  /// //////////////////

  React.useEffect(() => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    dispatch(
      // @ts-ignore
      fetchPizzas({
        sortBy,
        order,
        category,
        currentPage,
      }),
    );
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage, dispatch]);

  /// /////////////////

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage, navigate]);

  /// ///////////////

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortProp = list.find((obj: any) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sortProp,
        }),
      );

      isSearch.current = true;
    }
  }, [dispatch]);

  /// //////////////////

  React.useEffect(() => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      // @ts-ignore
      fetchPizzas({
        sortBy,
        order,
        category,
        currentPage,
      });
    }

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  /// ///////////////////

  return (
    <div className='container'>
      <div className="content__top">
            <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          {
            status === 'error'
              ? (
                <div className='content__error-info'>
                <h2>Произошла ошибка 😕</h2>
                <p>
                  К сожалению, не удалось получить данные для загрузки. Попробуйте повторить попытку позже.
                </p>
              </div>
              )
              : (
                <div className="content__items">
                  {status === 'loading'
                    ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
                    : items.filter((item: any) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((el: any) => <Link to={`/pizza/${el.id}`} key={el.id} ><Card {...el} /></Link>)
                  }
                </div>
              )
          }

          <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
    </div>
  );
};

export default Home;