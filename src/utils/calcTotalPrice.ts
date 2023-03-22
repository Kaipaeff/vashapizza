/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import { TCartItem } from '../redux/slices/CartSlice';

const calcTotalPrice = (items: TCartItem[]) => items.reduce((sum, obj) => obj.price * obj.count + sum, 0);

export default calcTotalPrice;
