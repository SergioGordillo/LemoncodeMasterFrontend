import { request, gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

import {
  CharacterEntityApi,
  EndpointCharacter,
} from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const url = 'https://rickandmortyapi.com/graphql';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = gql`
    query {
      characters {
        info {
          count
          pages
          next
          prev
        }
        results {
          id
          name
          status
          species
          type
          gender
          origin {
            name
          }
          location {
            name
          }
          image
          episode {
            episode
          }
          created
        }
      }
    }
  `;

  const data = await request(url, query);
  return data.characters.results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((c) => c.id !== id);
  return true;
};
