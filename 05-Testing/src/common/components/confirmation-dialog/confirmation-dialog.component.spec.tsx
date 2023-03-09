import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { confirmationDialogProps } from './confirmation-dialog.vm';

describe('common/DashboardComponent', () => {
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

  it('The text for the buttons is rendered properly when the correct props are passed', () => {
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
    const { getByRole } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const closeButton = getByRole('button', { name: props.labels.closeButton });
    const acceptButton = getByRole('button', {
      name: props.labels.closeButton,
    });
    expect(closeButton).toBeInTheDocument();
    expect(acceptButton).toBeInTheDocument();
  });

  it('When I click on "Cancelar" it calls onClose Method', async () => {
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
    const { getByRole } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const closeButton = getByRole('button', { name: props.labels.closeButton });
    await userEvent.click(closeButton);
    expect(props.onClose).toHaveBeenCalled();
  });

  it('When I click on "Aceptar" it calls onAccept Method', async () => {
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
    const { getByRole } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const acceptButton = getByRole('button', {
      name: props.labels.acceptButton,
    });
    await userEvent.click(acceptButton);
    expect(props.onAccept).toHaveBeenCalled();
  });
});
