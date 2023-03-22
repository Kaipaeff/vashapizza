/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import calcTotalPrice from '../../utils/calcTotalPrice';
import getCartFromLS from '../../utils/getCartFromLS';
import { RootState } from '../store';

export type TCartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
}

// если нужно типизировать стэйт, то обычно это делают через interface, а не type
interface ICartSliceState {
  totalPrice: number;
  items: TCartItem[];
  // price: number;
}

const { items, totalPrice } = getCartFromLS();

const initialState: ICartSliceState = {
  totalPrice,
  items,
  // price,
};

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

export const selectCart = (state: RootState) => state.cart;
export const selectCardItemById = (id: string) => (state: RootState) => state.cart.items.find((obj: { id: string; }) => obj.id === id);

export const {
  addItem, removeItem, clearItems, minusItem,
} = cartSlice.actions;

export default cartSlice.reducer;
