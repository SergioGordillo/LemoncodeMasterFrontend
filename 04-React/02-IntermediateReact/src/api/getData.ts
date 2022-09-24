import { ItemInfoEntity } from '../model/model';
import { footballShirts } from "../database/footballshirts";
import { videogames } from "../database/videogames";


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getFootballShirts(): Promise<ItemInfoEntity[]> {
    await timeout(3000);
    return footballShirts;
}

export async function getVideogames(): Promise<ItemInfoEntity[]> {
    await timeout(3000);
    return videogames;
}
