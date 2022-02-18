import { React } from "react";
import Product from "./Product.jsx";

function Index({ products }) {
  return (
    <div className="products row">
      {products.length ? (
        products.map((item) => (
          <div className="m-2 col-lg-2 products">
            <Product
              title={item.title}
              description={item.description}
              image={item.image}
              jewelery={item.jewelery}
              price={item.price}
            />{" "}
          </div>
        ))
      ) : (
        <h1>No Product</h1>
      )}
    </div>
  );
}

export default Index;
