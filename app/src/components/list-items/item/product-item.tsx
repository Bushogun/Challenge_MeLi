import React from 'react';
import styles from './product-item.module.scss'
// import { Product } from '@/interfaces/ProductItem'

// interface ProductItemProps {
//   product: Product; 
// }

// const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
//   return (
//     <div>
//       <img src={product.picture} alt={product.title} />
//       <h3>{product.title}</h3>
//       <p>{product.price.currency} {product.price.amount}</p>
//       <p>{product.address.state_name}, {product.address.city_name}</p>
//     </div>
//   );
// };

export const ProductItem = () => {
    return (
      <div className={styles.productContainer}>
        <img src="https://http2.mlstatic.com/D_619667-MLA47781882790_102021-I.jpg"
        alt="Apple iPhone 13 (128 Gb) - Azul" />
        754000
        <h3>Apple iPhone 13 (128 Gb) - Azul</h3>
        <p>"quantity": 12,</p>
        <p>"amount": 141752,</p>
        <p>
        "state_name": "Capital Federal",
        "city_name": "Colegiales"
        </p>
        <p>"condition": "new",
        free_shipping": true,
        </p>
        <hr />
      </div>
    );
  };

