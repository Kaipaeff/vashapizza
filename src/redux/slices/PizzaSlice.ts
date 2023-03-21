/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

// type TFetchPizzasArgs = {
//   sortBy: string;
//   order: string;
//   category: string;
//   currentPage: number;
// }

type TPizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'succcess',
  ERROR = 'error'
}

interface IPizzaSliceState {
  items: TPizza[];
  status: Status;
}

const initialState: IPizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

export type TSearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  currentPage: number;
  search: string;
}

export const fetchPizzas = createAsyncThunk<TPizza[], TSearchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
  const {
    sortBy, order, category, currentPage,
  } = params;
  const { data } = await axios.get(`https://6318d0cb6b4c78d91b2fe4ef.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`);

  return data;
});

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TPizza[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },

  // без TypeScript
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.status = 'error';
  //     state.items = [];
  //   },
  // },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
