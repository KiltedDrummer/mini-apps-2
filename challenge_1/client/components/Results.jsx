import React from 'react';
import ResultEntry from './ResultEntry';

const Results = ({ entries }) => {

  if (entries === 'New')  {
    return (
      <div id="results">
        Enter a year to search by!
      </div>
    )
  } else if (entries.length === 0) {
    return (
      <div id="results">
        <p>There doesn't seem to be any entries for that year...</p>
        <p>Try another year!</p>
      </div>
    )
  } else {
    const entryList = entries.map(entry => {
        return <ResultEntry event={entry} />
    });

    return (
      <div id="results">
        { entryList }
      </div>
    )
  }
}

export default Results;
