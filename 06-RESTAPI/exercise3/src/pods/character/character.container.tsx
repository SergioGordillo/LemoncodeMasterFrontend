import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  console.log('character', character);
  // const [cities, setCities] = React.useState<Lookup[]>([]);
  const { id } = useParams<{ id: string }>();
  const parsedId = parseInt(id);
  const navigate = useNavigate();

  // const handleLoadCityCollection = async () => {
  //   const apiCities = await api.getCities();
  //   setCities(apiCities);
  // };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(parsedId);
    console.log('apiCharacter', apiCharacter);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  //si lo hago así ya al hijo no le estoy pasando un character
  //   const { name, age, gender } = await api.getCharacter(parsedId);
  // console.log('name', name);
  // console.log('age', age);
  // console.log('gender', gender);
  // setCharacter(mapCharacterFromApiToVm({ name, age, gender }));

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
