import React from 'react';
import Header from './Header';
import Coins from './Coins';
import Details from './Details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCoins: [
        { "time": { "updated": "Sep 18, 2013 17:27:00 UTC", "updatedISO": "2013-09-18T17:27:00+00:00" }, "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index. Non-USD currency data converted using hourly conversion rate from openexchangerates.org", "bpi": { "USD": { "code": "USD", "rate": "126.5235", "description": "United States Dollar", "rate_float": 126.5235 }, "CNY": { "code": "CNY", "rate": "775.0665", "description": "Chinese Yuan", "rate_float": "775.0665" } } }
      ],
      history: {
        "bpi": {
          "2013-09-01": 128.2597,
          "2013-09-02": 127.3648,
          "2013-09-03": 127.5915,
          "2013-09-04": 120.5738,
          "2013-09-05": 120.5333,
        },
        "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
        "time": {
          "updated":"Sep 6, 2013 00:03:00 UTC",
          "updatedISO": "2013-09-06T00:03:00+00:00"
        },
      },
      dates: [],
      prices: [],
    }
  };

  componentDidMount() {
    // const dates = this.state.history.map(entry => {
      
    // })
  }

  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <Coins coins={this.state.currentCoins} />
          <Details coin={this.state.currentCoins[0]} history={this.state.history.bpi} />
        </div>
      </div>
    )
  }
}

export default App;
