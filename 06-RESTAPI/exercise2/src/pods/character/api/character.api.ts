import { Character } from './character.api-model';
// import { Lookup } from 'common/models';
import axios from 'axios';

export const getCharacter = async (id: number): Promise<Character> => {
  const url = `http://localhost:3000/results/${id}`;
  const { data } = await axios.get<Character>(url);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
