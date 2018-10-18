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
      keyword: '',
      events: 'New',
      count: 0,
      topic: 'category1',
      topicQuery: 'By place',
      page: 1,
      current: [],
      modal: false,
    }
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(e) {
    console.log(e.selected)
    this.search(this.state.current[0], this.state.current[1], e.selected);
  }

  handleChange(e) {
    const stateObject = {};
    stateObject[e.target.name] = e.target.value;
    this.setState(stateObject);
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
      topicSearch: () => {
        this.search(this.state.topic, this.state.topicQuery);
      },
    }
    searches[e.target.name]();
  }

  search(type, query, page = 1) {
    this.setState({
      current: [type, query],
    });
    console.log(`/events/?${type}=${query}`)
    axios(`/events/?${type}=${query}&_page=${page + 1}&_limit=10`)
      .then(results => {
        console.log(results);
        this.setState({
          count: results.headers["x-total-count"],
          events: results.data, 
        });
      });
  }

  render() {
    if (this.state.modal) {
      return 
    } 
    return (
      <div>
        <Header
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results
          entries={this.state.events}
          count={this.state.count}
          onPageChange={this.handlePageClick}
        />
      </div>
    );
  }
}

export default App;
