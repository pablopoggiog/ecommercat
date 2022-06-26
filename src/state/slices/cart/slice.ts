import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { Product } from "types";
import { json } from "stream/consumers";

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

      // Store the cart in local storage for persistence
      window.localStorage.setItem("cart", JSON.stringify(state));
    },
    loadFromStorage: (state) => {
      const stringifiedCart = window.localStorage.getItem("cart");

      if (stringifiedCart) {
        const cart: CartState = JSON.parse(stringifiedCart);
        state.cartList = cart.cartList;
        state.totalPrice = cart.totalPrice;
      }
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
    removeProduct: (state, { payload: id }: PayloadAction<Product["id"]>) => {
      const productIndex = state.cartList.findIndex(
        (element) => element.product.id === id
      );
      state.cartList = state.cartList.filter(
        (_, index) => index !== productIndex
      );
    },
  },
});

export const {
  addProduct,
  incrementProductAmount,
  decrementProductAmount,
  removeProduct,
  loadFromStorage,
} = cartSlice.actions;

export const cartReducer = (state: RootState) => state.cartReducer;

export default cartSlice.reducer;
