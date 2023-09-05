import React, { createContext, useContext, useEffect, useState } from 'react';

export const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState(""); 
  const [availableSorts, setAvailableSorts] = useState([]);
  const [availablePriceFilter, setAvailablePriceFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");

  const limit = 20;

  const createSearch = (search) => {
    setSearchQuery(search);
  };

  const applySort = (sortId) => {
    setSelectedSort(sortId);
  };

  const applyPriceFilter = (minPrice, maxPrice) => {
    const formattedMinPrice = parseFloat(minPrice).toFixed(2);
    const formattedMaxPrice = parseFloat(maxPrice).toFixed(2);
    const priceFilterValue = `${formattedMinPrice}-${formattedMaxPrice}`;
    setPriceFilter(priceFilterValue);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        console.log(priceFilter)

        const sortQueryParam = selectedSort ? `&sort=${selectedSort}` : "";
        const priceQueryParam = priceFilter ? `&price=${priceFilter}` : "";
        const response = await fetch(
          `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=${limit}${sortQueryParam}${priceQueryParam}`
        );
        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }
        const data = await response.json();
        setProducts(data.results);
        // console.log("setProducts " + JSON.stringify(data.results))
        setAvailableSorts(data.available_sorts);
        // console.log("setAvailableSorts " + JSON.stringify(data.available_sorts))
        setAvailablePriceFilter(data.available_filters[2])
        console.log("setAvailablePriceFilter " + JSON.stringify(data.available_filters[2]))
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [searchQuery, selectedSort, priceFilter]); 
  return (
    <ProductContext.Provider value={{ products, loading, error, createSearch, availableSorts, applySort, applyPriceFilter, availablePriceFilter  }}>
      {children}
    </ProductContext.Provider>
  );
};
