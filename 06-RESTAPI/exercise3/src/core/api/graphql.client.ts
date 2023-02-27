import { GraphQLClient } from 'graphql-request';

const url = '/https://rickandmortyapi.com/api/character/';

export const graphQLClient = new GraphQLClient(url);
