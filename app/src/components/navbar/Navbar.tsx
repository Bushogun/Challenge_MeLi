import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchBarForm } from '@/src/components/navbar/search-bar-form/search-bar-form';
import styles from './navbar.module.scss';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.reload();
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          src="/logo_ml.png"
          alt="Logo Mercado Libre"
          title="Logo Mercado Libre"
          width="60"
          height="45"
          priority={true}
          onClick={handleLogoClick}
        />
      </Link>
      <SearchBarForm />
    </nav>
  );
};
