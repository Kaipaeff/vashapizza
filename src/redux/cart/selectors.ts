/* eslint-disable import/no-unresolved */
import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;
export const selectCardItemById = (id: string) => (state: RootState) => state.cart.items.find((obj: { id: string; }) => obj.id === id);
