import React from "react";
import { getFootballShirts } from "../api";
import { ProductsComponent } from "../components/Products";

export const TShirtsScene: React.FC = () => {
  const pageName = "Football Shirts";
  const assetPath = "assets/footballshirts/";
  return (
    <ProductsComponent
      pageName={pageName}
      assetPath={assetPath}
      getProducts={getFootballShirts}
    />
  );
};
