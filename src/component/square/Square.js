import React from 'react';

const Square = ({ piece, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {piece}
    </div>
  );
};

export default Square;
