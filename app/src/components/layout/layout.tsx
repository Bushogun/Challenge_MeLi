import React, { ReactNode, Suspense } from 'react'
import { Navbar } from "../navbar/Navbar"
import Head from 'next/head'
import styles from './layout.module.scss'
import { ListItems } from '../list-items/list-product-items'

type Props = {
	children?: ReactNode
	title?: string
}

function Layout( { children, title = 'Mercado Libre' }: Props) {
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
    <main className={styles.container}>
      <ListItems />
    </main>
    </>
  )
}

export default Layout
