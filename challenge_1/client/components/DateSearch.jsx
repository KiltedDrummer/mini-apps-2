import React from 'react';

const DateSearch = ({ handleChange, handleSubmit }) => {

    return (
      <form>
        <label>Search by Year</label>
        <input type="number" name="year" placeholder="469" onChange={handleChange} required></input>
        <select name="era" onChange={handleChange}>
          <option value="AD">AD</option>
          <option value="BC">BC</option>
        </select>
        <input type="submit" value="Search" onClick={handleSubmit} />
      </form>
    )
}

export default DateSearch;
