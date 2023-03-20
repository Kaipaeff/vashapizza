/* eslint-disable react/jsx-filename-extension */
import { Link } from 'react-router-dom';

export default function CartEmpty() {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пуста<span>😕</span></h2>
      <p>
        Вероятно, вы ещё не заказывали пиццу.<br/>
        Для  заказа, пожалуйста, перейдите на главную страницу.
      </p>
      <img
        src="/img/empty-cart.png"
        alt="Empty cart"
      />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}
