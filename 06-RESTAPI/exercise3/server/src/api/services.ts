import axios from "axios";
import { Character, CharacterEntityApi } from "./models/characterentity.model";

const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await axios.get<Character>(url);
  const { results } = data;
  return results;
};
