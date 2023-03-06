import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { confirmationDialogProps } from './confirmation-dialog.vm';

describe('common/DashboardComponent', () => {
  it('should be render as expected passing required properties', () => {
    // Arrange
    const props: confirmationDialogProps = {
      isOpen: false,
      onAccept: () => {},
      onClose: () => {},
      title: 'Eliminar proyecto',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
      children: '',
    };

    // Act
    // const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    const component = render(<ConfirmationDialogComponent {...props} />);
    component.getByText('Eliminar Proyecto');

    // Assert
    // const element = getByText('Eliminar Proyecto');
    // expect(element).not.toBeNull();
    // expect(element).toBe('Eliminar Proyecto');

    // const element2 = screen.getByRole('button');
    // expect(element2).toBeInTheDocument();
  });
});
