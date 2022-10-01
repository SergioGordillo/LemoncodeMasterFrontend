import { ItemInfoEntityVM } from './itemInfoEntity.view-model';

// export interface addProductToCartContext {
//     product: undefined | null | ItemInfoEntityVM;
//     setProduct: React.Dispatch<React.SetStateAction<ItemInfoEntityVM[]>> | React.Dispatch<React.SetStateAction<undefined>> | React.Dispatch<React.SetStateAction<null>>
// }

// export interface addProductToCartContext {
//     footballShirt?: ItemInfoEntityVM[],
//     videogame?: ItemInfoEntityVM[],
//     addToCart: (footballShirt?: ItemInfoEntityVM[], videogame?: ItemInfoEntityVM[]) => void
// }

export type addProductToCartContext = (
    footballShirt?: ItemInfoEntityVM[],
    videogame?: ItemInfoEntityVM[],
) => void;