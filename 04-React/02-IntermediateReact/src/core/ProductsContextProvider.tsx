import React, { useState } from "react";
import { ItemInfoEntityVM } from '../model/ItemInfoEntity/itemInfoEntity.view-model';

export const ProductsContext = React.createContext<any>([]);

export const ProductsContextProvider = props => {

    const [selected, setSelected] = useState<any>([]);

    return (
        <ProductsContext.Provider value={{ selected, setSelected }}>
            {props.children}
        </ProductsContext.Provider>
    );
};