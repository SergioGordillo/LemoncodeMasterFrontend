import React, { useState } from "react";
import { ItemInfoEntityVM } from '../model/ItemInfoEntity/itemInfoEntity.view-model';

export const ProductsContext = React.createContext<any>([]);

export const ProductsContextProvider = props => {

    const [product, setProduct] = useState<ItemInfoEntityVM[]>([]);

    return (
        <ProductsContext.Provider value={{ product, setProduct }}>
            {props.children}
        </ProductsContext.Provider>
    );
};