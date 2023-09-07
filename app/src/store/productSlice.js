import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    searchQuery: '',
    limit: '20',
    selectedSort: '',
    priceFilter: '',
    products: [],
    loading: false,
    error: null,
    availableSorts: [],
    availablePriceFilter: [],
  },
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
  limit,
  setSearchQuery,
  setProducts,
  setLoading,
  setError,
  setSelectedSort,
  setAvailableSorts,
  setAvailablePriceFilter,
  setPriceFilter,
} = productSlice.actions;

export default productSlice.reducer;
