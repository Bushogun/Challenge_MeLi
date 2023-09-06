
export async function fetchProductData(
    searchQuery: string,
    limit: number,
    selectedSort: string | null,
    priceFilter: string | null
  ) {
    const sortQueryParam = selectedSort ? `&sort=${selectedSort}` : '';
    const priceQueryParam = priceFilter ? `&price=${priceFilter}` : '';
  
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=${limit}${sortQueryParam}${priceQueryParam}`
    );
  
    if (!response.ok) {
      throw new Error('Error al cargar productos');
    }
  
    const data = await response.json();
    return data;
  }

/*
export async function fetchProducts(
    searchQuery: string,
    limit: number,
    selectedSort: string | null,
    priceFilter: string | null
  ) {
    const sortQueryParam = selectedSort ? `&sort=${selectedSort}` : '';
    const priceQueryParam = priceFilter ? `&price=${priceFilter}` : '';
  
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=${limit}${sortQueryParam}${priceQueryParam}`
    );
  
    if (!response.ok) {
      throw new Error('Error al cargar productos');
    }
  
    const data = await response.json();
    return data.results;
  }
  
  export async function fetchAvailableSorts(
    searchQuery: string,
    limit: number,
    selectedSort: string | null
  ) {
    const sortQueryParam = selectedSort ? `&sort=${selectedSort}` : '';
  
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=${limit}${sortQueryParam}`
    );
  
    if (!response.ok) {
      throw new Error('Error al cargar available_sorts');
    }
  
    const data = await response.json();
    return data.available_sorts;
  }
  
  export async function fetchAvailablePriceFilter(searchQuery: string, limit: number) {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}&limit=${limit}`
    );
  
    if (!response.ok) {
      throw new Error('Error al cargar available_filters');
    }
  
    const data = await response.json();
    return data.available_filters.find((filter: any) => filter.id === 'price');
  }
  */