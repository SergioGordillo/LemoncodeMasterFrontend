import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ItemInfoEntity, ItemInfoEntityVM } from "../../model/ItemInfoEntity";
import { ProductItem } from "./productItem.component";
import { mapItemInfoEntityFromAPIModelToVM } from "../../api/footballShirtFromAPIMToVM";

interface Props {
  pageName: string;
  assetPath: string;
  getProducts: () => Promise<ItemInfoEntity[]>;
}

export const ProductsComponent = (props: Props) => {
  const { pageName, assetPath, getProducts } = props;
  const [products, setProducts] = useState<ItemInfoEntityVM[]>([]);

  React.useEffect(() => {
    getProducts().then((data) => {
      const productsVM = mapItemInfoEntityFromAPIModelToVM(data);
      setProducts(productsVM);
    });
  }, []);

  return (
    <>
      <div className="links-wrapper">
        <Link to="/" className="navbar">
          Football Shirts
        </Link>
        <Link to="/videogames" className="navbar">
          Videogames
        </Link>
      </div>
      <div className="title-wrapper">
        <h2>Hello from {pageName} Page</h2>
      </div>
      <div className="footballshirts-wrapper">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            assetPath={assetPath}
          />
        ))}
      </div>
    </>
  );
};
