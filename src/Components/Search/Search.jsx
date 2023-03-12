import React from 'react';
// eslint-disable-next-line import/no-cycle
import { SearchContext } from '../../App';
import style from './Search.module.scss';

export default function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  return (
    <div className={style.root}>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={style.input}
        type="text"
        placeholder='Поиск пиццы...'
      />
      <img
        className={style.search}
        src="img/search.png"
        alt="search-icon"
      />
      {searchValue
        && <img onClick={onClickClear}
        className={style.clear}
        src="img/clear.png"
        alt="clear-icon"
      />}
    </div>
  );
}
