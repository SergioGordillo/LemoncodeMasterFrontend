import { environment } from "../core/environments/environment"
import { ItemInfoEntity } from '../model/model';

const baseUrl: string = environment.baseUrl;

export const getFootballShirts = (): Promise<ItemInfoEntity[]> => {
    return fetch(`${baseUrl}/footballshirts`)
        .then((response) => response.json())
}

export const getVideogames = (): Promise<ItemInfoEntity[]> => {
    return fetch(`${baseUrl}/videogames`)
        .then((response) => response.json())
}