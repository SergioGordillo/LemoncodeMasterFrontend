import axios from 'axios';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

import { CharacterEntityApi, EndpointCharacter } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const url = 'https://rickandmortyapi.com/api/character';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await axios.get<EndpointCharacter>(url);
  const { results } = data;
  return results;
};

// query {
//   characters
//   {
//     info {
//       count
//       pages
//       next
//       prev
//     },
//     results {
//       id,
//       name,
//       status,
//       species,
//       type,
//       gender,
//       origin {
//         name,
//       },
//       location{
//         name
//       },
//       image,
//       episode{
//         episode
//       },
//       created
//     }
//   }
// }

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((c) => c.id !== id);
  return true;
};
