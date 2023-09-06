import React from 'react';
import { IProduct } from '@/src/interfaces/i-products';
import { ProductItem } from './item/product-item';
import styles from './list-product-items.module.scss';
import Pagination from './list-product-items-pagination';
import { usePagination } from '@/src/hooks/usePagination';
interface Props {
  products: IProduct[];
}

export const ListItems = ({ products }: Props) => {
  const itemsPerPage = 4;

  const { currentPage, paginate, currentItems, totalPages } = usePagination(
    itemsPerPage,
    products
  );

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
