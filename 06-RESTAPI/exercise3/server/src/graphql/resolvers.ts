import { CharacterEntityApi } from 'api/models/characterentity.model';
import { getCharacterCollection } from 'api/services';

export const resolvers = {
  Query: {
    characters: async (): Promise<CharacterEntityApi[]> => {
      const characterList = await getCharacterCollection();
      return characterList;
    },
  },
};
