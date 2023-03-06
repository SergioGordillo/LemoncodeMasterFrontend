import * as apiModel from './api/project.api-model';
import {
  mapEmployeeSummaryFromApiToVm,
  mapEmployeeSummaryListFromApiToVm,
  mapProjectFromApiToVm,
} from './project.mapper';
import * as viewModel from './project.vm';

describe('mapper specs', () => {
  it('the mapper mapEmployeeSummaryFromApiToVm should work correctly when receives a correct input', () => {
    //Arrange
    const employeeSummaryAPI: apiModel.EmployeeSummary = {
      id: '1',
      employeeName: 'Mario',
    };

    //Act
    const result: viewModel.EmployeeSummary =
      mapEmployeeSummaryFromApiToVm(employeeSummaryAPI);

    //Assert
    expect(result).toEqual({ id: '1', employeeName: 'Mario' });
    expect(result.isAssigned).toBeUndefined();
  });

  it('the mapper mapEmployeeSummaryFromApiToVm should return an empty object when it receives a null input', () => {
    //Arrange
    const employeeSummaryAPI: apiModel.EmployeeSummary = null;

    //Act
    const result: viewModel.EmployeeSummary =
      mapEmployeeSummaryFromApiToVm(employeeSummaryAPI);

    //Assert
    expect(result).toEqual({});
  });

  it('the mapper mapEmployeeSummaryFromApiToVm should return an empty object when it receives an undefined input', () => {
    //Arrange
    const employeeSummaryAPI: apiModel.EmployeeSummary = undefined;

    //Act
    const result: viewModel.EmployeeSummary =
      mapEmployeeSummaryFromApiToVm(employeeSummaryAPI);

    //Assert
    expect(result).toEqual({});
  });

  it('the mapper mapEmployeeSummaryListFromApiToVm should return an empty array when it receives an undefined input', () => {
    //Arrange
    const employeeSummaryAPI = undefined;

    //Act
    const result: any = mapEmployeeSummaryListFromApiToVm(employeeSummaryAPI);

    //Assert
    expect(result).toEqual([]);
  });

  it('the mapper mapEmployeeSummaryListFromApiToVm should return an empty array when it receives a null input', () => {
    //Arrange
    const employeeSummaryAPI = null;

    //Act
    const result: any = mapEmployeeSummaryListFromApiToVm(employeeSummaryAPI);

    //Assert
    expect(result).toEqual([]);
  });

  it('the mapper mapEmployeeSummaryListFromApiToVm should return an empty array when it receives an empty array', () => {
    //Arrange
    const employeeSummaryAPI = [];

    //Act
    const result: any = mapEmployeeSummaryListFromApiToVm(employeeSummaryAPI);

    //Assert
    expect(result).toEqual([]);
  });

  it('the mapper mapEmployeeSummaryListFromApiToVm should return an array with one object when it receives an array with one object', () => {
    //Arrange
    const employeeSummaryAPI = [
      {
        id: '1',
        isAssigned: true,
        employeeName: 'Pepe',
      },
    ];

    //Act
    const result: any = mapEmployeeSummaryListFromApiToVm(employeeSummaryAPI);

    //Assert
    expect(result).toEqual([
      {
        id: '1',
        isAssigned: true,
        employeeName: 'Pepe',
      },
    ]);
  });

  it('the mapper mapEmployeeSummaryListFromApiToVm should return an array with two objects when it receives an array with two objects', () => {
    //Arrange
    const employeeSummaryAPI = [
      {
        id: '1',
        isAssigned: true,
        employeeName: 'Pepe',
      },
      {
        id: '2',
        employeeName: 'Ana',
      },
    ];

    //Act
    const result: any = mapEmployeeSummaryListFromApiToVm(employeeSummaryAPI);

    //Assert
    expect(result).toEqual([
      {
        id: '1',
        isAssigned: true,
        employeeName: 'Pepe',
      },
      {
        id: '2',
        employeeName: 'Ana',
      },
    ]);
  });

  it('the mapper mapProjectFromApiToVm should create a new project when it receives a null input', () => {
    //Arrange
    const projectAPI = null;

    //Act
    const result: any = mapProjectFromApiToVm(projectAPI);

    //Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  it('the mapper mapProjectFromApiToVm should create a new project when it receives an undefined input', () => {
    //Arrange
    const projectAPI = null;

    //Act
    const result: any = mapProjectFromApiToVm(projectAPI);

    //Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });
  });

  it('the mapper mapProjectFromApiToVm should return a correct object when it receives a proper input (an object that accomplish the apiModel.Project interface)', () => {
    //Arrange
    const projectAPI: apiModel.Project = {
      id: '1',
      name: 'Spanish Products ECommerce',
      externalId: '104',
      comments: 'We need to add 2 more FE Devs to the team',
      isActive: true,
      employees: [
        {
          id: '10',
          isAssigned: true,
          employeeName: 'Sergio Gordillo',
        },
        {
          id: '21',
          isAssigned: true,
          employeeName: 'Isabel Romero',
        },
      ],
    };

    //Act
    const result: any = mapProjectFromApiToVm(projectAPI);

    //Assert
    expect(result).toEqual({
      id: '1',
      name: 'Spanish Products ECommerce',
      externalId: '104',
      comments: 'We need to add 2 more FE Devs to the team',
      isActive: true,
      employees: [
        {
          id: '10',
          isAssigned: true,
          employeeName: 'Sergio Gordillo',
        },
        {
          id: '21',
          isAssigned: true,
          employeeName: 'Isabel Romero',
        },
      ],
    });
  });
});
