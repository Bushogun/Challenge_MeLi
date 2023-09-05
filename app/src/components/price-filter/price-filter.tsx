import React, { useState } from 'react';
import styles from './price-filter.module.scss';
import { useProductContext } from "@/src/context/ProductContext";
import { IfilterRangeValues } from '@/src/interface/i-price-filter'

interface PriceFilterProps {
  onFilterChange: (minPrice: string, maxPrice: string) => void;
  availablePriceFilter: IfilterRangeValues;
  defaultValue: string;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilterChange, availablePriceFilter }) => {
  const [minPrice, setMinPrice] = useState<string>('*');
  const [maxPrice, setMaxPrice] = useState<string>('*');

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value);
  };

  const applyFilter = () => {
    const minPriceNum = parseFloat(minPrice);
    const maxPriceNum = parseFloat(maxPrice);

    if (!isNaN(minPriceNum) && !isNaN(maxPriceNum)) {
      onFilterChange(minPriceNum.toString(), maxPriceNum.toString());
    } 
  };

  if (!availablePriceFilter || !availablePriceFilter.values || !Array.isArray(availablePriceFilter.values)) {
    return null;
  }

  return (
    <div className={styles.price_filter}>
      <div className={styles.name_filter}>Precio</div>
      {availablePriceFilter.values.map((priceRangeValue) => (
        <label key={priceRangeValue.id} className={styles.price_filter_label}>
          {`${priceRangeValue.name}`}<small>&nbsp;(${priceRangeValue.results})</small>
          <input
            type="radio"
            name="priceRange"
            value={priceRangeValue.id.replace(/^price-/, "")}
            // onClick={() => {
            //   onFilterChange(availablePriceFilter.id, priceRangeValue.id.replace(/^price-/, ""));
            // }}
          />
        </label>
      ))}
      <div className={styles.inputs_container}>
        $
        <input
          className={styles.price_filter_input}
          placeholder="Mínimo"
          type="number"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <p>a&nbsp;</p>
        $
        <input
          className={styles.price_filter_input}
          placeholder="Máximo"
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
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
