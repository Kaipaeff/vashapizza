import React from 'react';
import uniqid from 'uniqid';

type CategoriesProps = {
  value: number;
  onChangeCategory: any;
}

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  const categories = ['Все', 'Мясная', 'Куриная', 'Грибная', 'Сырная', 'Овощная'];

  return (
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
  );
};

export default Categories;
