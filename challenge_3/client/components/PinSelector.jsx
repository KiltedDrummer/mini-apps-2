import React from 'react';
import Button from './Button';

const PinSelector = ({ pinCount, handleSelect }) => {
  const Buttons = [];
  for (let i = 1; i <= 10; i += 1) {
    if (i <= 10) {
      Buttons.push((
        <button className={`number ${i}`} key={i} onClick={handleSelect}>{i}</button>
      ));
    } else {
      Buttons.push((
        <button className={`notAvail ${i}`} key={i} onClick={handleSelect}>{i}</button>
      ));
    }
  };

  return (
    <div id="pin_selector">
      <h2>Select Pins To Hit</h2>
      <div id='keypad'>
        { Buttons }
      </div>
    </div>
  )
}

export default PinSelector;
