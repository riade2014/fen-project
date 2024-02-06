import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

describe('Board component', () => {
  it('should allow moving a piece to an empty square', () => {
    const { container } = render(<Board fen="8/8/8/8/4P3/8/8/8 w - - 0 1" />);
    const squares = container.querySelectorAll('.square');
    
    // Select the piece to move (a pawn)
    fireEvent.click(squares[35]); // Click on the pawn at index 35
    
    // Move the pawn to an empty square
    fireEvent.click(squares[27]); // Click on the empty square at index 27
    
    // Check if the pawn moved successfully
    expect(squares[35].textContent).toBe(''); // The original square should be empty
    expect(squares[27].textContent).toBe('P'); // The pawn should be in the new square
  });

  it('should not allow moving a piece to an occupied square', () => {
    const { container } = render(<Board fen="8/8/8/8/4P3/8/8/4P3 w - - 0 1" />);
    const squares = container.querySelectorAll('.square');
    
    fireEvent.click(squares[35]); // Click on the pawn at index 35
    
    // Attempt to move the pawn to an occupied square
    fireEvent.click(squares[27]); 
    
    // Check if the pawn didn't move
    expect(squares[35].textContent).toBe('P'); 
    expect(squares[27].textContent).toBe('P');
  });
});
