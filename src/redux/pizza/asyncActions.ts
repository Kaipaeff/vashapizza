/* eslint-disable import/no-unresolved */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TPizza, TSearchPizzaParams } from './types';

const fetchPizzas = createAsyncThunk<TPizza[], TSearchPizzaParams>('pizza/fetchPizzasStatus', async (params) => {
  const {
    sortBy, order, category, currentPage,
  } = params;
  const { data } = await axios.get(`https://6318d0cb6b4c78d91b2fe4ef.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`);

  return data;
});

export default fetchPizzas;
