/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import { TCartItem } from '../redux/slices/cart/types';
import calcTotalPrice from './calcTotalPrice';

const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as TCartItem[],
    totalPrice,
  };
};

export default getCartFromLS;
