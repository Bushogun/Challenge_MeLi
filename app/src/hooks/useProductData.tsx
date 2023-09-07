import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError, setAvailablePriceFilter, setAvailableSorts } from '@/src/store/productSlice';
import { fetchProductData } from '@/src/utils/apiUtils';

const useProductData = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.product.searchQuery);
  const limit = useSelector((state: RootState) => state.product.limit);
  const selectedSort = useSelector((state: RootState) => state.product.selectedSort);
  const priceFilter = useSelector((state: RootState) => state.product.priceFilter);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetchProductData(dispatch, searchQuery, limit, selectedSort, priceFilter);
        console.log(data)
        dispatch(setProducts(data.results))
        dispatch(setAvailableSorts(data.available_sorts))
        // dispatch(setAvailableSorts(data.available_filters))
        // dispatch(setAvailablePriceFilter)
        dispatch(setLoading(false));
      } catch (error) {
        // dispatch(setError('Hubo un error en el fetch'));
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [searchQuery, limit, selectedSort, priceFilter]);
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