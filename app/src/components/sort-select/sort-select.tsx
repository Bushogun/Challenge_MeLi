import React from 'react';
import styles from './sort-select.module.scss'

export const SortSelect = () => {
    const options = [
      { value: 'Más relevantes', label: 'Más relevantes' },
      { value: 'Menor precio', label: 'Menor precio' },
      { value: 'Mayor precio', label: 'Mayor precio' },
    ];
return (

  <div className={styles.sort}>
  Ordenar por 
  <select className={styles.customSelect}> 
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
</div>
   );
  };
