import React from 'react';
import axios from 'axios';
import Header from './Header';
import Results from './Results';
import Navigation from './Navigation';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      era: '',
      events: 'New',
      count: 0,
    }
    this.searchByDate = this.searchByDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    const name = e.target.name;
    if (name === 'year') {
      this.setState({
        year: e.target.value
      })
    } else if (name === 'era') {
      this.setState({
        era: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = Number(this.state.year);
    if (this.state.era === 'BC') {
      query *= -1;
    }
    this.searchByDate(query);
  }

  searchByDate(date) {
    console.log(`/events/?date=${date}`)
    axios(`/events/?date=${date}&_page=1&_limit=5`)
      .then(results => {
        console.log(results);
        this.setState({
          count: results.headers["x-total-count"],
          events: results.data, 
        });
      });
  }

  render() {
    return (
      <div>
        <Header
          searchByDate={this.searchByDate}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results entries={this.state.events} />
        <Navigation count={this.state.count} />
      </div>
    );
  }
}

export default App;
