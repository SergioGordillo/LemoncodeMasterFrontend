import { environment } from "../core/environments/environment"
import { ItemInfoEntity } from '../model/model';
import { footballShirts } from "../database/footballshirts";
import { videogames } from "../database/videogames";

const baseUrl: string = environment.baseUrl;

export const getFootballShirts = (): any => {
    setTimeout(() => {
        console.log(footballShirts);
        return footballShirts;
    }, 1000)
}

export const getVideogames = (): Promise<ItemInfoEntity[]> => {
    return fetch(`${baseUrl}/videogames`)
        .then((response) => response.json())
}