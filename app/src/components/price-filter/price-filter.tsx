import React, { useState, ChangeEvent } from 'react';
import styles from './price-filter.module.scss'

interface PriceFilterProps {
  onFilterChange: (minPrice: string, maxPrice: string) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');



  return (
    <div>
      <div>Precio</div>
      <label>
        $40.000 a $50.000
        <input
          type="radio"
          name="priceRange"
          value="40000-50000"
          // onChange={handleMinPriceChange}
        />
      </label>
      <label>
        $50.000 a $55.000
        <input
          type="radio"
          name="priceRange"
          value="50000-55000"
          // onChange={handleMinPriceChange}
        />
      </label>
      <div>
        $<input
          type="number"
          value={minPrice}
          // onChange={handleMinPriceChange}
          placeholder="Mínimo"
        />{' '}
        a $
        <input
          type="number"
          value={maxPrice}
          // onChange={handleMaxPriceChange}
          placeholder="Máximo"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
