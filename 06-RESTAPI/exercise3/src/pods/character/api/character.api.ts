import { Character } from './character.api-model';
// import { Lookup } from 'common/models';
import axios from 'axios';

export const getCharacter = async (id: number): Promise<Character> => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const { data } = await axios.get<any>(url);
  return data;
};

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
