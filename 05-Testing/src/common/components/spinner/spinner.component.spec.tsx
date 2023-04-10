import React from 'react';
import { render, screen } from '@testing-library/react';
import { usePromiseTracker } from 'react-promise-tracker';
import { Modal } from '@mui/material';
import Loader from 'react-spinners/ScaleLoader';
import * as classes from './spinner.styles';
import { SpinnerComponent } from "./spinner.component";

jest.mock('react-promise-tracker');

describe('common/components/spinner/spinner.component.tsx', () => {

  beforeEach(() => {
    // usePromiseTracker.mockReturnValue({ promiseInProgress: false });
    usePromiseTracker.
  });



  it('The H2 with the text "Eliminar Proyecto" is rendered when the proper props are received', () => {
    // Arrange
    const props: confirmationDialogProps = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar proyecto',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
      children: '',
    };

    // Act
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const element = getByText(props.title);
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('H2');
  });
});
