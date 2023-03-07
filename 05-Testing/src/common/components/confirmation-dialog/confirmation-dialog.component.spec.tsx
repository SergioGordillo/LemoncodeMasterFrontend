import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { confirmationDialogProps } from './confirmation-dialog.vm';

describe('common/DashboardComponent', () => {
  it('should be render as expected passing required properties', () => {
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
    // const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    const { getByText } = render(<ConfirmationDialogComponent {...props} />);
    const element = getByText(props.title);
    expect(element).not.toBeNull();
    expect(element.tagName).toEqual('H2');

    // Assert
    // const element = getByText('Eliminar Proyecto');
    // expect(element).not.toBeNull();
    // expect(element).toBe('Eliminar Proyecto');

    // const element2 = screen.getByRole('button');
    // expect(element2).toBeInTheDocument();
  });
});
