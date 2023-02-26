import React from 'react';
import { render } from '@testing-library/react';
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
    const { getByText } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    const element = getByText('Eliminar Proyecto');
    expect(element).not.toBeNull();
    expect(element).toBe('Eliminar Proyecto');
  });
});
