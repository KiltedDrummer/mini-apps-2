import React from 'react';
import ResultEntry from './ResultEntry';
import Navigation from './Navigation';

const Results = ({ entries, count, onPageChange }) => {

  if (entries === 'New')  {
    return (
      <div id="results">
        Enter a year, keyword, or category to search by!
      </div>
    )
  } else if (entries.length === 0) {
    return (
      <div id="results">
        <p>There don't seem to be any entries for that...</p>
        <p>Try another search!</p>
      </div>
    )
  } else {
    const entryList = entries.map(entry => {
        return <ResultEntry event={entry} />
    });

    return (
      <div id="results">
        { entryList }
        <Navigation count={count} onPageChange={onPageChange}/>
      </div>
    )
  }
}

export default Results;
