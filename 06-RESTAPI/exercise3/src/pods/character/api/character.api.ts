import { Character } from './character.api-model';
import axios from 'axios';
import request, { gql } from 'graphql-request';

const url = 'https://rickandmortyapi.com/graphql';

export const getCharacter = async (id: number): Promise<Character> => {
  // const url = `https://rickandmortyapi.com/api/character/${id}`;
  // const { data } = await axios.get<any>(url);
  // return data;
  const query = gql`
    query ($id: ID!) {
      character(id: $id) {
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

  const variables = {
    id: '3',
  };

  const data = await request(url, query, variables);
  console.log('data', data);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
