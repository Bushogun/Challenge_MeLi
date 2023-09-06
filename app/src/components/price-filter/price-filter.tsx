import React, { useState } from 'react';
import styles from './price-filter.module.scss';
import { IfilterRangeValues } from '@/src/interfaces/i-filter-range-values'
import { useProductContext } from "@/src/contexts/ProductContext";

interface PriceFilterProps {
  onFilterChange: (minPrice: string, maxPrice: string) => void;
  availablePriceFilter: IfilterRangeValues;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange, availablePriceFilter }) => {
  const { applyPriceFilter } = useProductContext();
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value);
  };

  const applyFilter = () => {

      applyPriceFilter(minPrice, maxPrice);

  };

  if (!availablePriceFilter || !availablePriceFilter.values || !Array.isArray(availablePriceFilter.values)) {
    return null;
  }

  return (
    <div className={styles.price_filter}>
      <div className={styles.name_filter}>Precio</div>
      {availablePriceFilter.values.map((priceRangeValue) => (
        <label key={priceRangeValue.id} className={styles.price_filter_label}>
          {`${priceRangeValue.name}`}
          <input
            type="radio"
            name="priceRange"
            value={priceRangeValue.id}
            onClick={() => {
              // applyFilter(setMinPrice(value));
            }}
          /><small>&nbsp;({priceRangeValue.results})</small>
        </label>
      ))}
      <div className={styles.inputs_container}>
        $
        <input
          className={styles.price_filter_input}
          placeholder="Mínimo"
          type="number"
          value={minPrice}
          onChange={(e) => {
            const inputText = e.target.value;
            const sanitizedValue = inputText.replace(/[^0-9]/g, '');
            handleMinPriceChange({ target: { value: sanitizedValue } } as React.ChangeEvent<HTMLInputElement>);
          }}

          onWheel={(e) => e.preventDefault()} 
        />
        <p>a&nbsp;</p>
        $
        <input
          className={styles.price_filter_input}
          placeholder="Máximo"
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          min="0" 
          onWheel={(e) => e.preventDefault()}
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
