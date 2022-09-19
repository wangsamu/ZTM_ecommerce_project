import React from "react";
import Button from "../button/Button";

function ProductCard() {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <span className="name">patata</span>
        <span className="price">patata</span>
        <span>patata</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
}

export default ProductCard;
