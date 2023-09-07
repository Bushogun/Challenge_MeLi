import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    searchQuery: '',
    limit: '20',
    itemsPerPage: '4',
    minPrice: '',
    maxPrice: '',
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
  limit,
  setMaxPrice,
  setMinPrice,
  itemsPerPage,
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
