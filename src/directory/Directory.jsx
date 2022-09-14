import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import directory from "./directory.json";
import "./directory.styles.scss";

function Directory() {
  return (
    <div className="directory-container">
      {directory.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default Directory;
