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
      keyword: '',
      events: 'New',
      count: 0,
    }
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const update = {
      year: () => {
        this.setState({
          year: e.target.value
        })
      },
      era: () => {
        this.setState({
          era: e.target.value
        })
      },
      keyword: () => {
        this.setState({
          keyword: e.target.value
        })
      },
    };

    update[e.target.name]();
  }

  handleSubmit(e) {
    e.preventDefault();
    const searches = {
      dateSearch: () => {
        let query = Number(this.state.year);
        if (this.state.era === 'BC') {
          query *= -1;
        }
        this.search('date', query);
      },
      keywordSearch: () => {
        this.search('q', this.state.keyword);
      },
    }
    searches[e.target.name]();
  }

  search(type, query) {
    console.log(`/events/?${type}=${query}`)
    axios(`/events/?${type}=${query}&_page=1&_limit=10`)
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
