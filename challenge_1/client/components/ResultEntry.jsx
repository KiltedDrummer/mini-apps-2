import React from 'react';

const ResultEntry = ({ event }) => {
  const parseDate = (date) => {
    let formatted = '';
    if (date < 0) {
      formatted = `${date * -1} BC`;
    } else {
      formatted = `${date} AD`;
    }
    return formatted;
  }

  if (event.category1 === "By place") {
    return (
      <div id="entry">
        <div><em>Date: </em> { parseDate(event.date) }</div>
        <div><em>Place: </em> { event.category2 }</div>
        <p>{ event.description }</p>
      </div>
    )
  } else if (event.category1 === "By topic") {
    return (
      <div id="entry">
        <div><em>Date: </em> { parseDate(event.date) }</div>
        <div><em>Topic: </em> { event.category2 }</div>
        <p>{event.description}</p>
      </div>
    )
  } else {
    return (
      <div id="entry">
        <div><em>Date: </em> { parseDate(event.date) }</div>
        <div><em>Range: </em> { event.category1 }</div>
        <p>{event.description}</p>
      </div>
    )
  }
}

export default ResultEntry;
