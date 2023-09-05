import React, { createContext, useContext, useEffect, useState } from 'react';

export const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState(""); // Nuevo estado para el ordenamiento
  const [availableSorts, setAvailableSorts] = useState([]);

  const createSearch = (search) => {
    setSearchQuery(search);
  };

  const applySort = (sortId) => {
    setSelectedSort(sortId);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const sortQueryParam = selectedSort ? `&sort=${selectedSort}` : ""; // Agregar el ordenamiento si está seleccionado
        const response = await fetch(
          `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=20${sortQueryParam}`
        );
        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }
        const data = await response.json();
        setProducts(data.results);
        console.log("setProducts " + JSON.stringify(data.results))
        setAvailableSorts(data.available_sorts);
        console.log("setAvailableSorts " + JSON.stringify(data.available_sorts))
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [searchQuery, selectedSort]); 
  return (
    <ProductContext.Provider value={{ products, loading, error, createSearch, availableSorts, applySort }}>
      {children}
    </ProductContext.Provider>
  );
};
