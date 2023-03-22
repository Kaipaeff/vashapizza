/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
export type TPizza = {
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

export interface IPizzaSliceState {
  items: TPizza[];
  status: Status;
}

export type TSearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  currentPage: number;
  search: string;
}
