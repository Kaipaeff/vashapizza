/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
// @ts-ignore
import style from './Search.module.scss';
import { setSearchValue } from '../../redux/filter/slice';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  // в колбэк можно передать ----->>> event: React.MouseEvent<HTMLImageElement>
  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(debounce((str) => {
    dispatch(setSearchValue(str));
  }, 500), []);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
