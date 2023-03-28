/* eslint-disable import/prefer-default-export */
import React from 'react';
import uniqid from 'uniqid';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
}

const categories = ['Все', 'Мясная', 'Куриная', 'Грибная', 'Сырная', 'Овощная'];

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => (
    <div className="categories">
    <ul>
      {categories.map((el, i) => <li
          key={uniqid()}
          onClick={() => onChangeCategory(i)}
          className={value === i ? 'active' : ''}
          >
            {el}
        </li>)}
    </ul>
  </div>
));
