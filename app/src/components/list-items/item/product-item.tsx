import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb'
import styles from './product-item.module.scss'


export const ProductItem = ({ product }:Props) => {
    return (
      <div className={styles.product_container}>
        <div className={styles.info_container}>
          <div className={styles.container_sell_info}>
            <img src={product.thumbnail}
            alt={product.title} width="180" height="180" />
            <div className={styles.container_state_info}>
              <p className={styles.condition} title="Atículo nuevo">New</p>
              <p className={styles.free_shipping} title="Envío gratis"><TbTruckDelivery /></p> 
            </div>
          </div>
          <div className={styles.product_description}>
            <h1 className={styles.title_price}>$ {product.price}</h1>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.quantity}> En {product.quantity} cuotas de $ {product.amount}</p>
          </div>  

          <div className={styles.container_details}>
            <p className={styles.state_name}>Capital Federal</p>
            <p className={styles.city_name}>{product.seller_address.city.name}</p>
          </div>
          
        </div>
          <hr />
      </div>
    );
  };

