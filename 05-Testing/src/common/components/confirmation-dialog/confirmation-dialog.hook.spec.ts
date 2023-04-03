import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { confirmationDialogProps } from './confirmation-dialog.vm';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('common/Components/ConfirmationDialog/confirmation-dialog.hook.ts', () => {
  it('it returns the correct initial values', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    console.log(result);

    // Assert
    const defaultItemToDelete: Lookup = { id: '', name: '' };
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(defaultItemToDelete);
  });
});

// describe('useConfirmationDialog', () => {
//   it('returns the correct initial values', () => {
//     const { result } = renderHook(() => useConfirmationDialog());

//     expect(result.current.isOpen).toBe(false);
//     expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
//   });

//   it('opens the dialog with the correct item when onOpenDialog is called', () => {
//     const { result } = renderHook(() => useConfirmationDialog());
//     const item = { id: '123', name: 'Item 1' };

//     act(() => {
//       result.current.onOpenDialog(item);
//     });

//     expect(result.current.isOpen).toBe(true);
//     expect(result.current.itemToDelete).toEqual(item);
//   });

//   it('closes the dialog when onClose is called', () => {
//     const { result } = renderHook(() => useConfirmationDialog());

//     act(() => {
//       result.current.onClose();
//     });

//     expect(result.current.isOpen).toBe(false);
//   });

//   it('clears the itemToDelete state when onAccept is called', () => {
//     const { result } = renderHook(() => useConfirmationDialog());
//     const item = { id: '123', name: 'Item 1' };

//     act(() => {
//       result.current.onOpenDialog(item);
//       result.current.onAccept();
//     });

//     expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
//   });
// });
