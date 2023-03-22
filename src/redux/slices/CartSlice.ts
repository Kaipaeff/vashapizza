/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  price: number;
}

const initialState: ICartSliceState = {
  totalPrice: 0,
  items: [],
  price: 0,
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
      state.totalPrice = state.items.reduce((sum, obj) => (obj.price * obj.count) + sum, 0);
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
export const selectCardItemById = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id);

export const {
  addItem, removeItem, clearItems, minusItem,
} = cartSlice.actions;

export default cartSlice.reducer;
