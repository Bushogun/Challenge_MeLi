import React from 'react';
import { ProductItem } from './item/product-item'
import styles from './list-product-items.module.scss'

export const ListItems = () => {
    return (
      <div className={styles.listContainer}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        
      </div>
    );
  };

