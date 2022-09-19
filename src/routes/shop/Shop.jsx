import React, { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductContext } from "../../context/ProductContext";

function Shop() {
  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <div>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Shop;
