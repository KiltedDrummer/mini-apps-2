import React from 'react';
import Graph from './Graph';
import Info from './Info';

const Details = ({ coin, history, select, graphType, handleChange, handleSearch }) => {
  const dates = [];
  const prices = [];
  const datePricePairs = Object.entries(history).sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    }
    else {
      return -1;
    }
  });

  datePricePairs.forEach(pair => {
    dates.push(pair[0]);
    prices.push(pair[1]);
  });
  
  return (
    <div id="details">
      <Graph dates={dates}
      prices={prices}
      select={select}
      graphType={graphType}
      handleChange={handleChange}
      handleSearch={handleSearch}
      />
      <Info coin={coin} />
    </div>
  )
}

export default Details;
