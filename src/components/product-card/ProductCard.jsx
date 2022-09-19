import React from "react";
import Button from "../button/Button";

function ProductCard({ product }) {
  const { name, price, imgURL } = product;

  return (
    <div>
      <img src={imgURL} alt={name} />
      <div>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
}

export default ProductCard;
