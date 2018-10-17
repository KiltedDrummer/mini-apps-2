import React from 'react';
import ReactPaginate from 'react-paginate';

const Navigation = ({ count }) => {
  if (count === 0) {
    return (
      <div></div>
    );
  }
  return (
    <div id="nav">
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={<a href="">...</a>}
        breakClassName={"break-me"}
        pageCount={Math.ceil(count / 5)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
      />
    </div>
  )
}

export default Navigation;
