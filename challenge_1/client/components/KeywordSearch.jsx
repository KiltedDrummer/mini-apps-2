import React from 'react';

const DateSearch = ({ handleChange, handleSubmit }) => {

  return (
    <form>
      <label>Search by Keyword</label>
      <input type="text" name="keyword" placeholder="Rome" onChange={handleChange}></input>
      <input type="submit" name="keywordSearch" value="Search" onClick={handleSubmit} />
    </form>
  )
}

export default DateSearch;
