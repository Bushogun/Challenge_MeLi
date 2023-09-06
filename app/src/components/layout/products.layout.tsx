import React from 'react'
import { useProductContext } from "@/src/contexts/ProductContext";
import { ListItems } from '../list-items/list-product-items'
import { IProduct } from '@/src/interfaces/i-products';

interface Props {
  products: IProduct[];
  product: IProduct;
}

function ProductsLayout() {
    const { products, product, loading, error } = useProductContext();
  return (
    <>
    {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ListItems products={products} />
      )}
    </>
  )
}

export default ProductsLayout