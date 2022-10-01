import { ItemInfoEntityVM } from './itemInfoEntity.view-model';

export type removeProductFromCartContext = (
    product: ItemInfoEntityVM[],
    footballShirt?: ItemInfoEntityVM[],
    videogame?: ItemInfoEntityVM[]
) => void;