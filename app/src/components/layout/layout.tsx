import React, { ReactNode, Suspense } from 'react'
import Head from 'next/head'
import { Navbar } from "../navbar/Navbar"
import { useProductContext } from "@/src/context/ProductContext";
import { ListItems } from '../list-items/list-product-items'
import { SortSelect } from '../sort-select/sort-select'
import PriceFilter from '../price-filter/price-filter'
import styles from './layout.module.scss'


type Props = {
	children?: ReactNode
	title?: string
}

// const { ProductProvider } = useProductContext();


function Layout( { children, title = 'Mercado Libre' }: Props) {
  const { products, loading, error } = useProductContext();
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Mercado libre app" />
        <meta name="author" content="Jonathan Stiven Soto Pantoja" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icono_ml.ico" />
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      <div className={styles.container}>
      {/* <PriceFilter /> */}
        <SortSelect />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ListItems products={products} />
        )}
      </div>
    </main>
    </>
  )
}

export default Layout
