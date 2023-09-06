import { useState, useEffect } from 'react';
import { fetchProductData } from '@/src/utils/apiUtils';

const useProductData = ({ searchQuery, limit, selectedSort, priceFilter, setAvailableSorts, setAvailablePriceFilter }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const data = await fetchProductData(searchQuery, limit, selectedSort, priceFilter);

        setProducts(data.results);
        setAvailableSorts(data.available_sorts);
        setAvailablePriceFilter(data.available_filters.find(filter => filter.id === 'price'));

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, limit, selectedSort, priceFilter]);

  return { products, loading, error };
};

export default useProductData;


/*

import { useState, useEffect } from 'react';
import {
  fetchProducts,
  fetchAvailableSorts,
  fetchAvailablePriceFilter,
} from './apiUtils';

const useProductData = ({ searchQuery, limit, selectedSort, priceFilter }) => {
  const [products, setProducts] = useState([]);
  const [availableSorts, setAvailableSorts] = useState([]);
  const [availablePriceFilter, setAvailablePriceFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const productsData = await fetchProducts(searchQuery, limit, selectedSort, priceFilter);
        const sortsData = await fetchAvailableSorts(searchQuery, limit, selectedSort);
        const priceFilterData = await fetchAvailablePriceFilter(searchQuery, limit);

        setProducts(productsData);
        setAvailableSorts(sortsData);
        setAvailablePriceFilter(priceFilterData);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, limit, selectedSort, priceFilter]);

  return { products, availableSorts, availablePriceFilter, loading, error };
};

export default useProductData;
*/