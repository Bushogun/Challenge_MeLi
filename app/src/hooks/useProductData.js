import { useState, useEffect } from 'react';

const useProductData = ({ searchQuery, limit, selectedSort, priceFilter, setAvailableSorts, setAvailablePriceFilter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const sortQueryParam = selectedSort ? `&sort=${selectedSort}` : '';
        const priceQueryParam = priceFilter ? `&price=${priceFilter}` : '';

        const response = await fetch(
          `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=${limit}${sortQueryParam}${priceQueryParam}`
        );
        console.log(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=${limit}${sortQueryParam}${priceQueryParam}`)
        if (!response.ok) {
          throw new Error('Error al cargar productos');
        }
        const data = await response.json();
        setProducts(data.results);
        setAvailableSorts(data.available_sorts);
        console.log("setAvailableSorts",data.available_sorts)
        // const priceFilterObject = data.available_filters.find(filter => filter.id === 'price');
        // if (priceFilterObject) {
        //   const priceValues = priceFilterObject.values;
        // }
        setAvailablePriceFilter(data.available_filters.find(filter => filter.id === 'price'));
        console.log("setAvailablePriceFilter",data.available_filters.find(filter => filter.id === 'price'))
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery, limit, selectedSort, priceFilter]);

  return { products, loading, error };
};

export default useProductData;
