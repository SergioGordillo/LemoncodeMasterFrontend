import { ItemInfoEntityVM } from './itemInfoEntity.view-model';

export type addProductToCartContext = (
    footballShirt?: ItemInfoEntityVM[],
    videogame?: ItemInfoEntityVM[],
) => void;