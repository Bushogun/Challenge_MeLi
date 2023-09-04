import React, { createContext, useContext, useEffect, useState } from 'react';

export const ProductContext = createContext();
export const useProductContext = () => useContext (ProductContext)


export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const createSearch = (search) => {
      setSearchQuery(search);
    }

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=4`
          );
          if (!response.ok) {
            throw new Error('Error al cargar productos');
          }
          console.log(response)
          const data = await response.json();
          setProducts(data.results);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      fetchProducts();
    }, [searchQuery]);

  

    return (
      <ProductContext.Provider value={{ products, loading, error, createSearch }}>
        {children}
      </ProductContext.Provider>
    );
  };
  