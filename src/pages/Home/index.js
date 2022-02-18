import { useEffect, useState } from "react";
import SearchProduct from "./../../components/SearchProduct";
import Product from "../../components/Products";

function Index() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <SearchProduct resultApi={(resultApi) => setProduct(resultApi)} />
      <hr />
      <Product products={product} />
    </>
  );
}
export default Index;
