import React from 'react';

const CoinEntry = ({ coin }) => {
  const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 2 }).format(coin.bpi.USD.rate_float)

  return (
    <div className="coin">
      <h1 className="coinName">{coin.chartName}</h1>
      <p className="currentRate"><strong>Current: </strong>{` ${usd}`}</p>
      <p className="currentTime">{`Updated on: ${coin.time.updated}`}</p>
      <p className="disclaimer">{coin.disclaimer}</p>
    </div>
  )
}

export default CoinEntry;
