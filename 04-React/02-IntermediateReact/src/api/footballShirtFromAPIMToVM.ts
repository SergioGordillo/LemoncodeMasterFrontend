import { ItemInfoEntity } from "../model/ItemInfoEntity/index";
import { ItemInfoEntityVM } from "../model/ItemInfoEntity/index";

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