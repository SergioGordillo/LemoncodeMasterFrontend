import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  ({
    ...character,
    id: character.id,
    name: character.name
  } as unknown as apiModel.Character);
