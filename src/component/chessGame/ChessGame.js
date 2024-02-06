import React, { useState } from 'react';
import Board from '../board/Board';

const initBoard = () => {
  return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
}

const ChessGame = () => {
  const [fen, setFen] = useState(initBoard());

  const updateFen = () => {
    setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  };

  return (
    <div className="chess-game">
      <Board fen={fen} />
      <button onClick={updateFen}>Next Move</button>
    </div>
  );
};

export default ChessGame;
