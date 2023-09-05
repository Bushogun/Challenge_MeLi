import React from 'react'
import { useProductContext } from "@/src/context/ProductContext";
import { ListItems } from '../list-items/list-product-items'

function ProductsLayout() {
    const { products, loading, error } = useProductContext();
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