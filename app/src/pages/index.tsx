import { useProduct } from "../context/ProductContext";
import Layout from "../components/layout/layout";

export default function Home() {
  const { products } = useProduct()
  console.log(products)
  return (
    <>
      <Layout />
    </>
    )
}
