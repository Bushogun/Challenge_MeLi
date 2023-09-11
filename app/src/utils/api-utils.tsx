import { setLoading } from '@/src/store/productSlice';

export async function fetchProductData(
  dispatch: any,
  searchQuery: string,
  limit: string,
  selectedSort: string,
  priceFilter: string,
) {
  try {
    dispatch(setLoading(true));

    let sortQueryParam = '';
    let priceQueryParam = '';
    if (selectedSort) {
      sortQueryParam = `&sort=${selectedSort}`;
    }
    if (priceFilter) {
      priceQueryParam = `&price=${priceFilter}`;
    }

    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=${limit}${sortQueryParam}${priceQueryParam}`
    );
    console.log (response);
    if (!response.ok) {
      throw new Error('Error al cargar productos');
    }

    const data = await response.json();
    dispatch(setLoading(false));

    return data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
}
