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
        dispatch(setProducts(data.results))
        dispatch(setAvailableSorts(data.available_sorts))
        dispatch(setAvailablePriceFilter(data.available_filters))
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError('Hubo un error en el fetch'));
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [searchQuery, limit, selectedSort, priceFilter]);
};

export default useProductData;
