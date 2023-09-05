import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SearchBarForm } from '@/src/components/navbar/search-bar-form/search-bar-form'
import styles from './navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Link href="/">
            <Image src="/logo_ml.png" alt="Logo Mercado libre" title="Logo Mercado Libre" width="60" height="45" priority={true} />
        </Link>
        <SearchBarForm />
    </nav>
  )
}
