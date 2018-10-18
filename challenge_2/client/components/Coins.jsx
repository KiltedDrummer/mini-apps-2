import React from 'react';
import CoinEntry from './CoinEntry'

const Coins = ({ coins }) => {
  const Entries = coins.map(coin => {
    return <CoinEntry coin={coin} />
  })

  return (
    <div id="coins">
      { Entries }
    </div>
  )
}

export default Coins;
