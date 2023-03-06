export interface confirmationDialogProps {
  isOpen: boolean;
  onAccept: () => void;
  onClose: () => void;
  title: string;
  labels: {
    closeButton: 'Cancelar';
    acceptButton: 'Aceptar';
  };
  children: '';
}

export interface labels {
  closeButton: string;
  acceptButton: string;
}
