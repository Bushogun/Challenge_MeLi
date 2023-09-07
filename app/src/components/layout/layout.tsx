import React, { ReactNode, Suspense } from 'react'
import Head from 'next/head'
import { Navbar } from "../navbar/Navbar"
import  ProductsLayout  from './products.layout'
import { SortFilter } from '../sort-filter/sort-filter'
// import { useProductContext } from "@/src/contexts/ProductContext";
import PriceFilter from '../price-filter/price-filter'
import styles from './layout.module.scss'

type Props = {
	children?: ReactNode
	title?: string
}

function Layout( { title = 'Mercado Libre' }: Props) {
  interface PriceFilterProps {
    onFilterChange: (minPrice: string, maxPrice: string) => void;
  }

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
        <div className={styles.container_filters}>
          <PriceFilter />
          <SortFilter />
        </div> 
           <ProductsLayout /> 
      </div>
    </main>
    </>
  )
}

export default Layout
