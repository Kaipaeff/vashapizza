// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/CartSlice';

export default configureStore({
  reducer: {
    filter,
    cart,
  },
});
