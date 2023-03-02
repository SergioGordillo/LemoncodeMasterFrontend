import { Character } from './character.api-model';
import axios from 'axios';
import request, { gql } from 'graphql-request';

const url = 'https://rickandmortyapi.com/graphql';

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

  const data = await request(url, query);
  console.log('data', data);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
