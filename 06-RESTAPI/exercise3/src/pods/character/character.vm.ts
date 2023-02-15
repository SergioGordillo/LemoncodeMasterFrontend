export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const createEmptyCharacter = (): Character => ({
  id: getRandomInt(10000),
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  image: '',
});
