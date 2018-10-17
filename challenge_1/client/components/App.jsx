import React from 'react';
import axios from 'axios';
import Header from './Header';
import Results from './Results';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      era: '',
      events: 'New',
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
    axios(`/events/?date=${date}`)
      .then(results => {
        console.log(results);
        this.setState({
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
      </div>
    );
  }
}

export default App;
