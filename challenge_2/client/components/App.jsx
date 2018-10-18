import React from 'react';
import Header from './Header';
import Coins from './Coins';
import Details from './Details';
import axios from 'axios';

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
        },
        "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
        "time": {
          "updated":"Sep 6, 2013 00:03:00 UTC",
          "updatedISO": "2013-09-06T00:03:00+00:00"
        },
      },
      startDate: '2018-10-01',
      endDate: '2018-10-18',
      graphType: 'bar',
    };
    this.select = this.select.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  };

  select(e) {
    this.setState({
      graphType: e.target.value,
    });
  }

  handleChange(e) {
    const key = e.target.name;
    const newState = {}
    newState[key] = e.target.value;
    this.setState(newState);
  }

  handleSearch(e) {
    e.preventDefault();

    axios(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.startDate}&end=${this.state.endDate}`)
      .then(results => {
        this.setState({
          history: results.data,
        });
      });
  }

  componentDidMount() {
    axios('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(results => {
        this.setState({
          currentCoins: [results.data],
        });
      });
    
    axios(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${this.state.startDate}&end=${this.state.endDate}`)
      .then(results => {
        this.setState({
          history: results.data,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div id="main">
          <Coins coins={this.state.currentCoins} />
          <Details
          graphType={this.state.graphType}
          coin={this.state.currentCoins[0]}
          history={this.state.history.bpi}
          select={this.select}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          />
        </div>
      </div>
    )
  }
}

export default App;
