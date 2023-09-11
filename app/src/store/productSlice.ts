import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { initialStateProductStore } from "./initial-state";

const productSlice = createSlice({
  name: "product",
  initialState: initialStateProductStore,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
    },
    setAvailableSorts: (state, action) => {
      state.availableSorts = action.payload;
    },
    setAvailablePriceFilter: (state, action) => {
      state.availablePriceFilter = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.priceFilter = action.payload;
    },
  },
});

export const {
  setMaxPrice,
  setMinPrice,
  setSearchQuery,
  setProducts,
  setLoading,
  setError,
  setSelectedSort,
  setAvailableSorts,
  setAvailablePriceFilter,
  setPriceFilter,
} = productSlice.actions;


export const limit = (state: RootState) => state.product.limit
export const itemsPerPage = (state: RootState) => state.product.itemsPerPage

export default productSlice.reducer
