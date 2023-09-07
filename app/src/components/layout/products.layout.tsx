import React from 'react';
import { useSelector } from 'react-redux';
import { ListItems } from '../list-items/list-product-items';

function ProductsLayout() {
  const loading = useSelector((state: RootState) => state.product.loading);
  const error = useSelector((state: RootState) => state.product.error);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ListItems />
      )}
    </>
  );
}

export default ProductsLayout;
