import React from 'react';
import { ISort } from '@/src/interface/i-available-sorts';
import styles from './sort-filter.module.scss';
import { useProductContext } from "@/src/context/ProductContext";

interface SortFilterProps {
  availableSorts: ISort[]; // Agrega esta propiedad a la interfaz de props
  defaultValue: string;
}

export const SortFilter = ({ defaultValue }: SortFilterProps) => {
  const { availableSorts, applySort } = useProductContext();

  if (availableSorts.length === 0) {
    return null;
  }

  return (
    <div className={styles.sort}>
      <p>Ordenar por</p>
      <select
        className={styles.customSelect}
        defaultValue={defaultValue}
        onChange={(e) => applySort(e.target.value)}
      >
        <option value={defaultValue}>Selecciona</option>
        {availableSorts.map((availableSort:any) => (
          <option key={availableSort.id} value={availableSort.id}>
            {availableSort.name}
          </option>
        ))}
      </select>
    </div>
  );
};
