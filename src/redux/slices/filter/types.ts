/* eslint-disable no-shadow */
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
