/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
// @ts-ignore
import style from './Search.module.scss';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(debounce((str) => {
    dispatch(setSearchValue(str));
  }, 500), []);

  const onChangeInput = (event: any) => {
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
};

export default Search;
