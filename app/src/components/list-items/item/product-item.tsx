import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb'
import styles from './product-item.module.scss'


export const ProductItem = ({ product }: Props) => {
  return (
    <div className={styles.product_container}>
      <div className={styles.info_container}>
        <div className={styles.container_sell_info}>
          <img src={product.thumbnail}
            alt={"Imagen " + product.title} width="180" height="180" />
          <div className={styles.container_state_info}>
            {product.condition ? (
              <p
                className={`${styles.condition} ${product.condition !== "new" ? styles.used : ""}`}
                title={product.condition !== "new" ? "Artículo usado" : "Artículo nuevo"}
              >
                {product.condition !== "new" ? "Used" : product.condition}
              </p>
            ) : null}

            {product.shipping.free_shipping ? (
              <p className={styles.free_shipping} title="Envío gratis"><TbTruckDelivery /></p>
            ) : null}
          </div>
        </div>
        <div className={styles.product_description}>
          <h1 className={styles.title_price}>$ {new Intl.NumberFormat('es-AR').format(product.price)}</h1>
          <h2 className={styles.title}>{product.title}</h2>
          {product.installments && (
            <p className={styles.quantity}>
              En {product.installments.quantity} cuotas de $ {product.installments.amount}
            </p>
          )}
        </div>

        <div className={styles.container_details}>
          <p className={styles.state_name}>{product.address.state_name}</p>
          <p className={styles.city_name}>{product.address.city_name}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

