import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { Product } from "types";

export interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "failed";
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios("https://www.amiiboapi.com/api/amiibo/");
    return response.data.amiibo;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.products = payload;
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectProducts = (state: RootState) =>
  state.productsReducer.products;

export default productsSlice.reducer;
