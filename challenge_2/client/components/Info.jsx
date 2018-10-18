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
  const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 2 }).format(coin.bpi.USD.rate_float)
  const cny = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'CNY', maximumSignificantDigits: 2 }).format(coin.bpi.CNY.rate_float)

  return (
    <div id="info">
      <h1 className="coinName">Bitcoin</h1>
      <h2>Prices</h2>
      <ul className="ratesList">
        <li className="rateItem">
          <strong>{coin.bpi.USD.code} :</strong>{` ${usd}`}
        </li>
        <li className="rateItem">
          <strong>{coin.bpi.CNY.code} :</strong>{` ${cny}`}
        </li>
      </ul>
      
      <p className="currentTime">{`Updated on: ${coin.time.updated}`}</p>
      <p className="disclaimer">{coin.disclaimer}</p>

    </div>
  )
  
};

export default Info;
