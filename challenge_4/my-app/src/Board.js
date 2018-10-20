import React from 'react';
import './Board.css';
const Board = ({ matrix, handleClick }) => {
  console.log(matrix);
  const Rows = matrix.map((row, rowIndex) => {
    const Boxes = row.map((box, colIndex) => {
      if (box[0] >= 0) {
        if (box[1]) {
          return (
            <div className="clicked box" row={rowIndex} col={colIndex} >
              {box[0]}
            </div>
          )
        } else {
          return (
            <div className="unclicked box" row={rowIndex} col={colIndex} onClick={handleClick}>
              
            </div>
          )
        }
      } else {
        return (
          <div className="unclicked bomb box" row={rowIndex} col={colIndex} onClick={handleClick}>
            
          </div>
        )
      }
    });
    return (
      <div className={`row_rowIndex row`}>
        { Boxes }
      </div>
    );
  });

  return (
    <div id="board">
      { Rows }
    </div>
  )
};

export default Board;
