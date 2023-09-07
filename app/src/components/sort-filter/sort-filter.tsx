import React from 'react';
import { ISort } from '@/src/interfaces/i-available-sorts';
import styles from './sort-filter.module.scss';
import { useSelector, useDispatch } from "react-redux";
import useProductData from '@/src/hooks/useProductData'
import { setSelectedSort } from '@/src/store/productSlice';

interface SortFilterProps {
  availableSorts: ISort[];
}

export const SortFilter = () => {
  const dispatch = useDispatch();
  const availableSorts = useSelector((state: RootState) => state.product.availableSorts);
  useProductData();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  dispatch(setSelectedSort(e.target.value));
}
  // if (products==0) {
  //   return null;
  // }
  //availableSorts(e.target.value)
  return (
    <div className={styles.sort}>
      <p>Ordenar por</p>
      <select
        className={styles.customSelect}
        onChange={handleChange}
      >
        <option value="" disabled >Selecciona</option>
        {availableSorts.map((availableSort:any) => (
          <option key={availableSort.id} value={availableSort.id}>
            {availableSort.name}
          </option>
        ))}
      </select>
    </div>
  );
};


