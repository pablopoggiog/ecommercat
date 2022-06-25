import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { Product } from "types";

interface CartProduct {
  amount: number;
  product: Product;
}
export interface CartState {
  cartList: CartProduct[];
  totalPrice: number;
}

const initialState: CartState = {
  cartList: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload: newProduct }: PayloadAction<Product>) => {
      const productIndex = state.cartList.findIndex(
        (element) => element.product.id === newProduct.id
      );

      state.totalPrice += newProduct.price;
      if (productIndex !== -1) state.cartList[productIndex].amount++;
      else
        state.cartList = [
          ...state.cartList,
          { amount: 1, product: newProduct },
        ];
    },
    incrementProductAmount: (
      state,
      { payload: id }: PayloadAction<Product["id"]>
    ) => {
      const productIndex = state.cartList.findIndex(
        (element) => element.product.id === id
      );

      state.totalPrice += state.cartList[productIndex].product.price;
      state.cartList[productIndex].amount++;
    },
    decrementProductAmount: (
      state,
      { payload: id }: PayloadAction<Product["id"]>
    ) => {
      const productIndex = state.cartList.findIndex(
        (element) => element.product.id === id
      );

      state.totalPrice -= state.cartList[productIndex].product.price;
      if (state.cartList[productIndex].amount === 1)
        state.cartList = state.cartList.filter(
          (_, index) => index !== productIndex
        );
      else state.cartList[productIndex].amount--;
    },
  },
});

export const { addProduct, incrementProductAmount, decrementProductAmount } =
  cartSlice.actions;

export const cartReducer = (state: RootState) => state.cartReducer;

export default cartSlice.reducer;
