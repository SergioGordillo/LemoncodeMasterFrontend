import { ItemInfoEntityVM } from './itemInfoEntity.view-model';

// export interface removeProductFromCartContext {
//     product: undefined | null | ItemInfoEntityVM;
//     setProduct: React.Dispatch<React.SetStateAction<ItemInfoEntityVM[]>> | React.Dispatch<React.SetStateAction<undefined>> | React.Dispatch<React.SetStateAction<null>>
// }

export interface removeProductFromCartContext {
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    footballShirt?: ItemInfoEntityVM[],
    videogame?: ItemInfoEntityVM[]
}