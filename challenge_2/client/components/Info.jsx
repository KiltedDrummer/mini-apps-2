import React from 'react';
/*
Name: 
Updated on:
Disclaimer:

USD:              CNY:
Change this week:   xx.x%
Change this Month:  xx.x%
Change this year:   xx.x%
*/


const Info = ({ coin }) => {
  const Currencies = Object.keys(coin.bpi).map(code => {
    const amount = new Intl.NumberFormat('en-US', { style: 'currency', currency: code, maximumSignificantDigits: 2 }).format(coin.bpi[code].rate_float)
    return (
      <li className="rateItem">
        <strong>{code} :</strong>{` ${amount}`}
      </li>
    )
  });

  return (
    <div id="info">
      <h1 className="coinName">{coin.chartName}</h1>
      <h2>Prices</h2>
      <ul className="ratesList">
        { Currencies }
      </ul>

      <p className="currentTime">{`Updated on: ${coin.time.updated}`}</p>
      <p className="disclaimer">{coin.disclaimer}</p>

    </div>
  )
  
};

export default Info;
