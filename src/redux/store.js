// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/CartSlice';
import pizza from './slices/PizzaSlice';

export default configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
