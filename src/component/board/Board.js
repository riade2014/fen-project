import React, { useState } from 'react';
import Square from '../square/Square';

const Board = ({ fen }) => {
  const getRows = (fen) => {
    const rows = fen.split(' ')[0].split('/');
    return rows.map(row => row.split(''));
  }

  const [boardState, setBoardState] = useState(getRows(fen));
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleSquareClick = (row, col) => {
    if (selectedPiece) {
      //Moving the workpiece
      const newBoardState = [...boardState];
      newBoardState[row][col] = selectedPiece.piece;
      // Reset selected part
      newBoardState[selectedPiece.row][selectedPiece.col] = '';
      setBoardState(newBoardState);
      setSelectedPiece(null);
    } else {
      // select part
      setSelectedPiece({ piece: boardState[row][col], row, col });
    }
  };

  const boardSize = 8; // size (8x8)
  const squareSize = 40; // Square size
  const padding = 10; 

  const boardWidth = boardSize * squareSize + padding * 2;

  return (
    <div className="board" >
      {boardState.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((piece, colIndex) => (
            <Square key={colIndex} piece={piece} onClick={() => handleSquareClick(rowIndex, colIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
