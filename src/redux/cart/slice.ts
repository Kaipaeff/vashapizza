/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import calcTotalPrice from '../../utils/calcTotalPrice';
import getCartFromLS from '../../utils/getCartFromLS';
import { ICartSliceState, TCartItem } from './types';

const initialState: ICartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TCartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },

    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
      if (findItem && findItem.count < 1 && state.items.length < 1) {
        state.totalPrice = 0;
      }
    },

    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      // state.totalPrice -= state.price;
      if (!state.items.length) {
        state.totalPrice = 0;
      }
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },

  },
});

export const {
  addItem, removeItem, clearItems, minusItem,
} = cartSlice.actions;

export default cartSlice.reducer;
