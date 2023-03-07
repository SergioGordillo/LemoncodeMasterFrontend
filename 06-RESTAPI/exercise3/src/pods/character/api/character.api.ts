import { Character } from './character.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface CharacterRequest {
  character: Character;
}

export const getCharacter = async (id: number): Promise<Character> => {
  const query = gql`
    query {
      character(id: "${id}") {
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
  `;

  const { character } = await graphQLClient.request<CharacterRequest>(query);
  return character;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
