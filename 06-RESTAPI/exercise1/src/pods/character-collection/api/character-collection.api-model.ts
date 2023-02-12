export interface Character {
  info: Info;
  results: CharacterEntityApi[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: any;
}

// export enum Gender {
//   Female = 'Female',
//   Male = 'Male',
//   Unknown = 'unknown',
// }

export interface Location {
  name: string;
  url: string;
}

export interface Origin {
  name: string;
  url: string;
}

// export enum Species {
//   Alien = 'Alien',
//   Human = 'Human',
// }

// export enum Status {
//   Alive = 'Alive',
//   Dead = 'Dead',
//   Unknown = 'unknown',
// }
