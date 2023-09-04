import React, { useState } from "react";
import { FiSearch } from 'react-icons/fi'
import { useProductContext } from "@/src/context/ProductContext";
import styles from './search-bar-form.module.scss'

export const SearchBarForm = () => {
    const [query, setQuery] = useState("");
    const { createSearch } = useProductContext();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createSearch(query);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
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
