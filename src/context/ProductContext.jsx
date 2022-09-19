import { createContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
  setCurrentContext: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
