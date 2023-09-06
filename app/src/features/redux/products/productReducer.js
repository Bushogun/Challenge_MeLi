// productReducer.js
import {
    SET_SEARCH_QUERY,
    SET_SELECTED_SORT,
    SET_AVAILABLE_SORTS,
    SET_AVAILABLE_PRICE_FILTER,
    SET_PRICE_FILTER,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
  } from './productActions';
  
  const initialState = {
    searchQuery: '',
    selectedSort: '',
    availableSorts: [],
    availablePriceFilter: [],
    priceFilter: '',
    products: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SEARCH_QUERY:
        return { ...state, searchQuery: action.payload };
      case SET_SELECTED_SORT:
        return { ...state, selectedSort: action.payload };
      case SET_AVAILABLE_SORTS:
        return { ...state, availableSorts: action.payload };
      case SET_AVAILABLE_PRICE_FILTER:
        return { ...state, availablePriceFilter: action.payload };
      case SET_PRICE_FILTER:
        return { ...state, priceFilter: action.payload };
      case FETCH_PRODUCTS_REQUEST:
        return { ...state, loading: true };
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, products: action.payload, loading: false };
      case FETCH_PRODUCTS_FAILURE:
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default productReducer;
  