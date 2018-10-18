import React from 'react';

const TopicSearch = ({ handleChange, handleSubmit }) => {

  return (
    <form>
      <label>Search by Category</label>
      <input type="text" name="topic" placeholder="Religion or By topic" onChange={handleChange}></input>
      <input type="submit" name="topicSearch" value="Search" onClick={handleSubmit} />
    </form>
  )
}

export default TopicSearch;
