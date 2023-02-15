import gql from 'graphql-tag';

export const typeDefs = gql`

 type Character {
  info: Info!;
  results: CharacterEntityApi[]!;
}

type Info {
  count: number!;
  pages: number!;
  next: string!;
  prev: null!;
}

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

  enum Gender {
    Female = 'Female',
    Male = 'Male',
    Unknown = 'unknown',
  }

  enum Species {
    Alien = 'Alien',
    Human = 'Human',
  }

  enum Status {
    Alive = 'Alive',
    Dead = 'Dead',
    Unknown = 'unknown',
  }

  type Location = {
    name: string;
    url: string;
  };

  type Origin {
    name: string;
    url: string;
  }

  type Query {
    getCharacterCollection: [CharacterEntityAPI!]!
  }
`;
