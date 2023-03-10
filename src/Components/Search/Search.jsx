import React from 'react';
import style from './Search.module.scss';

export default function Search() {
  return (
    <div className={style.root}>
      <input className={style.input} type="text" placeholder='Поиск пиццы...' />
      <img className={style.search} src="img/search.png" alt="search-icon" />
    </div>
  );
}
