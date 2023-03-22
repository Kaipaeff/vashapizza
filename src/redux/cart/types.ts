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
export interface ICartSliceState {
  totalPrice: number;
  items: TCartItem[];
  // price: number;
}
