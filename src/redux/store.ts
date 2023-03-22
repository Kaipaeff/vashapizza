/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filter from './slices/filter/slice';
import cart from './slices/cart/slice';
import pizza from './slices/PizzaSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
