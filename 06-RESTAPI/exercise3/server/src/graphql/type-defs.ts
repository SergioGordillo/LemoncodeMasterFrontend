import gql from 'graphql-tag';

export const typeDefs = gql`

  type CharacterEntityAPI {
    id: ID!;
    name: string;
    status: Status;
    species: Species;
    type: string;
    gender: Gender;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
`;


export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

// export type Location = gql`{
//   name: string;
//   url: string;
// }`;

// export interface Origin {
//   name: string;
//   url: string;
// }

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
