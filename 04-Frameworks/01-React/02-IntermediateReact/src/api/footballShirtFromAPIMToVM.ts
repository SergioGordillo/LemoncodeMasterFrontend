import { ItemInfoEntity, ItemInfoEntityVM } from "../model/ItemInfoEntity";

export const mapItemInfoEntityFromAPIModelToVM = (data: ItemInfoEntity[]): ItemInfoEntityVM[] => {
    return data.map((data) => {
        return {
            id: data.id,
            picURL: data.picURL,
            title: data.title,
            selected: false
        }
    })
}