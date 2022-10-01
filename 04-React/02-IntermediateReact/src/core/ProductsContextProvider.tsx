import React, { useState } from "react";
import { addProductToCartContext } from "../model/ItemInfoEntity/index";
import { ItemInfoEntityVM } from '../model/ItemInfoEntity/index';
import { removeProductFromCartContext } from '../model/ItemInfoEntity/removeProductFromCartContext-model';

export const ProductsContext = React.createContext<any>([]);
export const AddProductToCartContext = React.createContext<addProductToCartContext>(null);
export const RemoveProductFromCartContext = React.createContext<removeProductFromCartContext>(null);

export const ProductsContextProvider = props => {

    const [product, setProduct] = useState<ItemInfoEntityVM[]>([]);

    const addToCart = (footballShirt?: ItemInfoEntityVM[], videogame?: ItemInfoEntityVM[]): void => {
        if (footballShirt || videogame) {
            setProduct(null);
        } else {
            setProduct(footballShirt || videogame);
        }
    }

    const removeFromCart = (product: ItemInfoEntityVM[], footballShirt?: ItemInfoEntityVM[], videogame?: ItemInfoEntityVM[]): void => {
        if (product.includes(footballShirt || videogame)) {
            setProduct(null);
        }
    }

    return (
        <ProductsContext.Provider value={{ product, setProduct }}>
            <AddProductToCartContext.Provider value={addToCart}>
                <RemoveProductFromCartContext.Provider value={removeFromCart}>
                    {props.children}
                </RemoveProductFromCartContext.Provider>
            </AddProductToCartContext.Provider>
        </ProductsContext.Provider>
    );
};