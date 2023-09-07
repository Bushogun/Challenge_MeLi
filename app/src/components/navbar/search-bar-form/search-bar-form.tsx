import React from "react";
import { FiSearch } from 'react-icons/fi';
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from '@/src/store/productSlice';
import useProductData from '@/src/hooks/useProductData'
import styles from './search-bar-form.module.scss';

export const SearchBarForm = () => {
    const dispatch = useDispatch();
    const query = useSelector((state: RootState) => state.product.searchQuery);    
    
    useProductData();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!query) return;
            dispatch(setSearchQuery(query));
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    name={'search'}
                    placeholder="Buscar productos"
                    value={query}
                    onChange={handleChange}
                    required={true}
                    alt="search product"
                />

                <div className={'input-group-append'}>
                    <button className={'btn btn-search'} type="submit">
                        <FiSearch />
                    </button>
                </div>
            </div>
        </form>
    )
}
