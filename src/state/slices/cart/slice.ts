import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { Product } from "types";

interface CartProduct {
  amount: number;
  product: Product;
}
export interface CartState {
  cartList: CartProduct[];
}

const initialState: CartState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload: newProduct }: PayloadAction<Product>) => {
      const productIndex = state.cartList.findIndex(
        (element) => element.product.id === newProduct.id
      );
      if (productIndex !== -1) state.cartList[productIndex].amount++;
      else
        state.cartList = [
          ...state.cartList,
          { amount: 1, product: newProduct },
        ];
      console.log("state.cartList: ", state.cartList);
    },
  },
});

export const { addProduct } = cartSlice.actions;

export const selectCartProducts = (state: RootState) =>
  state.cartReducer.cartList;

export default cartSlice.reducer;
