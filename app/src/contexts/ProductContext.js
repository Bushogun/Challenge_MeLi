import React, { createContext, useContext, useState } from 'react';
import useProductData from '@/src/hooks/useProductData';

export const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState(""); 
  const [availableSorts, setAvailableSorts] = useState([]);
  const [availablePriceFilter, setAvailablePriceFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");
  const limit = 20;

  const { products, loading, error } = useProductData({
    searchQuery,
    limit,
    selectedSort,
    priceFilter,
    setAvailableSorts,
    setAvailablePriceFilter
  });


  const createSearch = (search) => {
    setSearchQuery(search);
  };

  const applySort = (sortId) => {
    setSelectedSort(sortId);
  };

  const applyPriceFilter = (minPrice, maxPrice) => {
    const priceFilterValue = `${minPrice}-${maxPrice}`;
    setPriceFilter(priceFilterValue);
  };
  
  return (
    <ProductContext.Provider value={{ 
      products,
      loading, 
      error, 
      createSearch, 
      availableSorts, 
      applySort, 
      applyPriceFilter,
      availablePriceFilter
    }}>
      {children}
    </ProductContext.Provider>
  );
};
