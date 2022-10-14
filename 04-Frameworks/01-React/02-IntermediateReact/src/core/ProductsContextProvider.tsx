import React from "react";
import { ItemInfoEntityVM } from "../model/ItemInfoEntity/index";

interface ProductContext {
  cart: ItemInfoEntityVM[];
  addToCart: (product: ItemInfoEntityVM) => void;
  removeFromCart: (product: ItemInfoEntityVM) => void;
}

export const ProductsContext = React.createContext<ProductContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const ProductsContextProvider = (props) => {
  const [cart, setCart] = React.useState<ItemInfoEntityVM[]>([]);

  const addToCart = (product: ItemInfoEntityVM): void => {
    if (!cart.some((p) => p.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product: ItemInfoEntityVM): void => {
    setCart(cart.filter((p) => p.id === product.id));
  };

  return (
    <ProductsContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
