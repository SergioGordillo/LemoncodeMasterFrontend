import axios from 'axios';

import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';
import { Character } from '../../character/api/character.api-model';

let characterCollection = [...mockCharacterCollection];
const url = 'http://localhost:3000/results';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await axios.get<CharacterEntityApi[]>(url);
  return data;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((c) => c.id !== id);
  return true;
};
