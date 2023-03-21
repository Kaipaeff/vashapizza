/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortPropertyEnum {
  RATING_ASC = 'rating',
  RATING_DESC = '-rating',
  TITLE_ASC = 'title',
  TITLE_DESC = '-title',
  PRICE_ASC = 'price',
  PRICE_DESC = '-price',
}

export type TSort = {
  name: string;
  sortProperty: SortPropertyEnum;
}

export interface IFilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: TSort;
}

const initialState: IFilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'по популярности',
    sortProperty: SortPropertyEnum.RATING_ASC,
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<TSort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectSort = (state: RootState) => state.filter.sort;

export const selectFilter = (state: RootState) => state.filter;

export const {
  setCategoryId, setSort, setCurrentPage, setSearchValue, setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
