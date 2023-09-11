import React, { useState } from 'react';
import styles from './price-filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxPrice, setMinPrice, setPriceFilter } from '@/src/store/productSlice';
import { RootState } from "@/src/store/store";

const PriceFilter = () => {
  const dispatch = useDispatch();

  const availablePriceFilter = useSelector((state: RootState) => {
    const priceFilter = state.product.availablePriceFilter.find((filter: { id: string; }) => filter.id === "price");
    return priceFilter ? priceFilter.values : [];
  });

  const minPrice = useSelector((state: RootState) => state.product.minPrice);
  const maxPrice = useSelector((state: RootState) => state.product.maxPrice);
  
  const handleMinPriceRadioButton = (x: string, y: string) => {
    dispatch(setMinPrice(x));
    dispatch(setMaxPrice(y));
    applyPriceFilter();
  };

  const applyPriceFilter = () => {
    const priceFilterValue = `${minPrice}-${maxPrice}`;
    dispatch(setPriceFilter(priceFilterValue));
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setMinPrice(value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setMaxPrice(value));
  };


  return (
    <div className={styles.price_filter}>
      <div className={styles.name_filter}>Precio</div>
      {availablePriceFilter.map((priceRangeValue: any) => (
        <label key={priceRangeValue.id} className={styles.price_filter_label}>
          {`${priceRangeValue.name}`}
          <input
            type="radio"
            name="priceRange"
            value={priceRangeValue.id}
            onClick={() => {
              const x = priceRangeValue.id.split('-')
              handleMinPriceRadioButton((x[0]), (x[1]))
              const priceFilterValue = `${x[0]}-${x[1]}`;
              dispatch(setPriceFilter(priceFilterValue));
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
        <div className={styles.container_button}>
          <button className={styles.price_filter_button} onClick={applyPriceFilter}>
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;