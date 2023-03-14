import React from 'react';
import debounce from 'lodash.debounce';
// eslint-disable-next-line import/no-cycle
import { SearchContext } from '../../App';
import style from './Search.module.scss';

export default function Search() {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(debounce((str) => {
    setSearchValue(str);
  }, 500), []);

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={style.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={style.input}
        type="text"
        placeholder='Поиск пиццы...'
      />
      <img
        className={style.search}
        src="img/search.png"
        alt="search-icon"
      />
      {value
        && <img onClick={onClickClear}
        className={style.clear}
        src="img/clear.png"
        alt="clear-icon"
      />}
    </div>
  );
}
