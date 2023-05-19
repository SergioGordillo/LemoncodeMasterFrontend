import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('common/Components/ConfirmationDialog/confirmation-dialog.hook.ts', () => {
  it('it returns the correct initial values', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    const emptyLookup: Lookup = { id: '', name: '' };
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(emptyLookup);
  });

  it('it opens the dialog with the correct item when onOpenDialog is called', () => {
    //Arrange

    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    const item = { id: '123', name: 'Item 1' };
    act(() => {
      result.current.onOpenDialog(item);
    });

    //Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('it closes the dialog when onClose is called', () => {
    //Arrange

    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onClose();
    });

    //Assert
    expect(result.current.isOpen).toBe(false);
  });

  it('it removes the item to delete when onAccept is accepted', () => {
    //Arrange

    //Act
    const { result } = renderHook(() => useConfirmationDialog());
    const item = { id: '123', name: 'Item 1' };
    const emptyLookup: Lookup = { id: '', name: '' };
    act(() => {
      result.current.onOpenDialog(item);
      result.current.onAccept();
    });

    //Assert
    expect(result.current.itemToDelete).toEqual(emptyLookup);
  });
});
