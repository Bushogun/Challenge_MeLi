import '@/src/styles/globals.scss'
import type { AppProps } from 'next/app'
import {ProductProvider} from '@/src/context/ProductContext';

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <ProductProvider> 
    <Component {...pageProps} /> 
  </ProductProvider> 
  )
}
