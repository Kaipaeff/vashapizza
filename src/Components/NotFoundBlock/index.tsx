/* eslint-disable import/prefer-default-export */
import React from 'react';
import style from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => (
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
