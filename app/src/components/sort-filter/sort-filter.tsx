import React from 'react';
import { ISort } from '@/src/interfaces/i-available-sorts';
import styles from './sort-filter.module.scss';
import { useProductContext } from "@/src/contexts/ProductContext";

interface SortFilterProps {
  availableSorts: ISort[];
}

export const SortFilter = ({ availableSorts }: SortFilterProps) => {
  const { applySort, products } = useProductContext();
  
  if (products==0) {
    return null;
  }

  return (
    <div className={styles.sort}>
      <p>Ordenar por</p>
      <select
        className={styles.customSelect}
        onChange={(e) => applySort(e.target.value)}
      >
        <option value="" disabled >Selecciona</option>
        {availableSorts.map((availableSort) => (
          <option key={availableSort.id} value={availableSort.id}>
            {availableSort.name}
          </option>
        ))}
      </select>
    </div>
  );
};
