import React from 'react';
import { IProduct } from '@/src/interface/i-products'
import { ProductItem } from './item/product-item'
import styles from './list-product-items.module.scss'

interface Props {
	products: IProduct[]
}

export const ListItems = ({ products }: Props) => {
    return (
      <>
        <div className={styles.listContainer}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
            ))}
        </div>
      </>
    );
  };

