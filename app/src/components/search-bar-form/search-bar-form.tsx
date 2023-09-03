import React from "react";
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi'
import styles from './search-bar-form.module.scss'

interface SearchBarFormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    query: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    errorText: string
}

export const SearchBarForm = ({ onSubmit, query, onChange}: SearchBarFormProps) =>{
    const router = useRouter()

    // const onSubmit = (e:any) =>{
    //     e.preventDefault()
    //     router.push("/items");
    // }
    
    return (
        <form className={styles.container} onSubmit={onSubmit}>
            <div className="input-group">
                <input
                className="form-control"
                type="text"
                name={'search'}
                placeholder="Buscar productos"
                value={query}
                onChange={onChange}
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