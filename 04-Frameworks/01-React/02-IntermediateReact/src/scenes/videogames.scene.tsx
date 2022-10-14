import React from "react";
import { getVideogames } from "../api";
import { ProductsComponent } from "../components/Products";

export const VideogamesScene: React.FC = () => {
  const pageName = "Videogames";
  const assetPath = "assets/videogames/";
  return (
    <ProductsComponent
      pageName={pageName}
      assetPath={assetPath}
      getProducts={getVideogames}
    />
  );
};
