import React from 'react';
import style from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
  return (
    <div className={style.root}>
      <h1>
        <span>&#128577;</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={style.description}>
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
}
