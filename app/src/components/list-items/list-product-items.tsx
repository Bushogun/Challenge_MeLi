import React, { useState } from 'react';
import { IProduct } from '@/src/interface/i-products';
import { ProductItem } from './item/product-item';
import styles from './list-product-items.module.scss';

interface Props {
  products: IProduct[];
}

export const ListItems = ({ products }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <div className={styles.listContainer}>
      {products
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      <div className={styles.pagination}>
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map((_, index) => (
          <button
            className={`${styles.button_pagination} ${index + 1 === currentPage ? styles.selected : ''}`}
            key={index}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};
