export interface StoreProduct {
  searchQuery: string;
  limit: string;
  itemsPerPage: string;
  minPrice: string;
  maxPrice: string;
  selectedSort: string;
  priceFilter: string;
  products: [];
  loading: Boolean;
  error: string | null;
  availableSorts: [];
  availablePriceFilter: [];
}
export const initialStateProductStore: StoreProduct = {
  searchQuery: "",
  limit: "20",
  itemsPerPage: "4",
  minPrice: "",
  maxPrice: "",
  selectedSort: "",
  priceFilter: "",
  products: [],
  loading: false,
  error: null,
  availableSorts: [],
  availablePriceFilter: [],
};
