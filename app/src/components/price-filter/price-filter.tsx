import React, { useState } from 'react';
import styles from './price-filter.module.scss';

interface PriceFilterProps {
  onFilterChange: (minPrice: string, maxPrice: string) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.value);
  };

  const applyFilter = () => {
    onFilterChange(minPrice, maxPrice);
  };

  return (
    <div className={styles.price_filter}>
      <div className={styles.name_filter}>Precio</div>
      <label className={styles.price_filter_label}>
        $40.000 a $50.000
        <input
          type="radio"
          name="priceRange"
          // value="40000-50000"
          // onChange={() => onFilterChange('40000', '50000')}
        />
      </label>
      <label className={styles.price_filter_label}>
        $50.000 a $55.000
        <input
          type="radio"
          name="priceRange"
          // value="50000-55000"
          // onChange={() => onFilterChange('50000', '55000')}
        />
      </label>
      <div className={styles.inputs_container}>
        $
        <input
          className={styles.price_filter_input}
          placeholder="Mínimo"
          type="number"
          // value={minPrice}
          // onChange={handleMinPriceChange}
        />
        <p>a&nbsp;</p>

        $<input
          className={styles.price_filter_input}
          placeholder="Máximo"
          type="number"
          // value={maxPrice}
          // onChange={handleMaxPriceChange}
        />
      </div>
      <div className={styles.container_button}>
        <button className={styles.price_filter_button} onClick={applyFilter}>
          Aplicar Filtro
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
