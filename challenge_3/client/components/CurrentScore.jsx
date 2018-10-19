import React from 'react';

const CurrentScore = ({ scoreCard, user, total }) => {
  const strike = (num) => {
    if (num === 10) {
      return 'X'
    } else {
      return num
    }
  };

  const spare = (arr) => {
    if (arr[0] + arr[1] === 10) {
      return '/';
    } else {
      return arr[1];
    }
  }

  const Columns = [<h3>Player Name</h3>];

  for (let i = 1; i <= 10; i += 1) {
    Columns.push(<h3>Frame {i}</h3>)
  };

  Columns.push(<h3>Total</h3>)
  const Frames = scoreCard.map(frame => {
    return (
      <div className="frame">
        <div className="balls">
          <div className="ball_1">
            { strike(frame[0]) }
          </div>
          <div className="ball_2">
            { spare(frame) }
          </div>
        </div>
        <div className="frame_score">{frame[2]}</div>
      </div>
    );
  });

  return (
    <div id="scorecard">
      { Columns }
      <div id="username">{user}</div>
      { Frames }
      <h4>{total}</h4>
    </div>
  )
}

export default CurrentScore;
