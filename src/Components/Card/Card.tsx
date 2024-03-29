/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { addItem } from '../../redux/cart/slice';
import { selectCardItemById } from '../../redux/cart/selectors';
import { TCartItem } from '../../redux/cart/types';

const typeNames = ['тонкое', 'традиционное'];

type TCardProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
}

export const Card: React.FC<TCardProps> = ({
  id, title, price, imageUrl, sizes, types,
}) => {
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);

  const dispatch = useDispatch();

  const cartItem = useSelector(selectCardItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: TCartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className='pizza-block-wrapper'>
      <div className="pizza-block">

        <Link key={id} to={`/pizza/${id}`}>
          <img className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>

      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId: number) => (
            <li
              key={uniqid()}
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? 'active' : ''}
            >{typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((el: number, i: number) => (
            <li
              key={uniqid()}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? 'active' : ''}
            >{el} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} руб.</div>
        <button onClick={onClickAdd} className="button button--outline button--add">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white" />
          </svg>
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
    </div>
  );
};
