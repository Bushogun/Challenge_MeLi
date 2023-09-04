import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb'
import styles from './product-item.module.scss'


export const ProductItem = () => {
    return (
      <div className={styles.product_container}>
        <div className={styles.info_container}>
          <div className={styles.container_sell_info}>
            <img src="https://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg"
            alt="image product  Apple iPhone 13 (128 Gb) - Azul" width="180" height="180" />
            <div className={styles.container_state_info}>
              <p className={styles.condition} title="Atículo nuevo">New</p>
              <p className={styles.free_shipping} title="Envío gratis"><TbTruckDelivery /></p> 
            </div>
          </div>
          <div className={styles.product_description}>
            <h1 className={styles.title_price}>$754000</h1>
            <h2 className={styles.title}>Apple iPhone 13 (128 Gb) - Azul</h2>
            <p className={styles.quantity}> En 12 cuotas de $141752</p>
            {/* <p className={styles.amount}>Cuotas desde: $ 141752</p> */}
          </div>  

          <div className={styles.container_details}>
            <p className={styles.state_name}>Capital Federal</p>
            <p className={styles.city_name}>Colegiales</p>
          </div>
          
        </div>
          <hr />
      </div>
    );
  };

