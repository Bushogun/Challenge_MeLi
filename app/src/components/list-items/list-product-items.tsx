import React from 'react';
import { IProduct } from '@/src/interfaces/i-products';
import { ProductItem } from './item/product-item';
import styles from './list-product-items.module.scss';
import Pagination from './list-product-items-pagination';
import { usePagination } from '@/src/hooks/usePagination';
import { useSelector } from 'react-redux';

interface Props {
  products: IProduct[];
}

export const ListItems = () => {
  const itemsPerPage = useSelector((state: RootState) => state.product.itemsPerPage);
  const products = useSelector((state: RootState) => state.product.products);

  const { currentPage, paginate, currentItems, totalPages } = usePagination(
    itemsPerPage,
    products
  );

  if (products.length === 0) {
    return null; 
  }

  return (
    <div className={styles.listContainer}>
      {products.length === 0 ? (null) : (
        <>
          {currentItems().map((product: IProduct, index: number) => (
            <ProductItem key={index} product={product} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={paginate}
          />
        </>
      )}
    </div>
  );

};
