import React from 'react';
// eslint-disable-next-line import/no-cycle
import { SearchContext } from '../../App';
import style from './Search.module.scss';

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={style.root}>
      <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className={style.input} type="text" placeholder='Поиск пиццы...' />
      <img className={style.search} src="img/search.png" alt="search-icon" />
      {searchValue && <img onClick={() => setSearchValue('')} className={style.clear} src="img/clear.png" alt="clear-icon" />}
    </div>
  );
}
