import React from 'react';

const Display = ({ pins }) => {
  const Rows = pins.map((row, index) => {
    return (
      <div className={`row_${index}`}>
        {row.map(pin => {
          if (pin === 0) {
            return (<div className="down">X</div>)
          } else {
            return (<div className="up"></div>)
          }
        })}
      </div>
    )
  });

  return (
    <div id="image">
    <h2>Pins Remaining</h2>
      <div id="display">
        { Rows[0] }
        { Rows[1] }
        { Rows[2] }
        { Rows[3] }
      </div>
    </div>
  )
}

export default Display;
