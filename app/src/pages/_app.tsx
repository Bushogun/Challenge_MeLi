import '@/src/styles/globals.scss'
import type { AppProps } from 'next/app'
import  { ProductProvider }  from '@/src/contexts/ProductContext';
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <ProductProvider> 
    <Component {...pageProps} /> 
  </ProductProvider> 
  )
}
