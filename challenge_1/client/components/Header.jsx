import React from 'react';
import DateSearch from './DateSearch';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="header">
        <h1>Let's Get Historical!</h1>
        <DateSearch 
          searchByDate={this.props.searchByDate}
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}

        />
        <form>
          {/* <label>Search my Place</label>
          <input type="text" name="place" placeholder="Roman Empire"></input> */}
        </form>
      </div>
    )
  }
}

export default Header;
