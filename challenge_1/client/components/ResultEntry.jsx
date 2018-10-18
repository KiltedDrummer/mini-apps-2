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

  const parseRange = (range) => {
    const parsedRange = range.split('&amp;amp;amp;ndash;').join(' - ');
    return parsedRange;
  }

  const parseDescription = (text) => {
    return text.replace(/ampampndash/gi, ' - ')
  }

  if (event.category1 === "By place") {
    return (
      <div className="event">
        <div className="details">
          <div className="entryDate"><strong>Date: </strong> { parseDate(event.date) }</div>
          <button className="edit">Edit</button>
          <div className="entryTopic"><strong>Place: </strong> { event.category2 }</div>
        </div>
        <div className="description">
          <h4>Description:</h4>
          <p>{ parseDescription(event.description) }</p>
        </div>
      </div>
    )
  } else if (event.category1 === "By topic") {
    return (
      <div className="event">
        <div className="details">
        <div className="entryDate"><strong>Date: </strong> { parseDate(event.date) }</div>
        <button className="edit">Edit</button>
        <div className="entryTopic"><strong>Topic: </strong> { event.category2 }</div>
        </div>
        <div className="description">
        <h4>Description:</h4>
        <p>{ parseDescription(event.description) }</p>
      </div>
    )
  } else {
    return (
      <div className="event">
          <div className="details">
        <div className="entryDate"><strong>Date: </strong> { parseDate(event.date) }</div>
        <button className="edit">Edit</button>
        <div className="entryTopic"><strong>Range: </strong> { parseRange(event.category1) }</div>
          </div>
          <div className="description">
        <h4>Description:</h4>
        <p>{ parseDescription(event.description) }</p>
      </div>
    )
  }
}

export default ResultEntry;
