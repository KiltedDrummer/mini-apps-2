import React from 'react';
import Chart from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

const Graph = ({ dates, prices, select, graphType, handleChange, handleSearch }) => {
  // const myChart = new Chart(react - chartjs - 2, {
  //   type: 'bar',
  //   data: {
  //     labels: dates,
  //     datasets: [{
  //       label: 'Date',
  //       data: prices,
  //       backgroundColor: [rgba(203, 37, 37, 1)],
  //       borderColor: [rgba(128, 128, 128, 1)],
  //       borderWidth: 1,
  //     }]
  //   },

  // });
  const data = {
    labels: dates,
    datasets: [{
      label: 'Price',
      data: prices,
      backgroundColor: 'rgba(203, 37, 37, 1)',
      borderColor: 'rgba(128, 128, 128, 1)',
      borderWidth: 1,
    }],
  };

  const Form = () => {
    return (
      <form>
        <label>Select type of Graph</label>
        <select name="type" onChange={select}>
          <option name="bar" value="bar">Bar</option>
          <option name="line" value="line">Line</option>
          <option name="pie" value="pie">Pie</option>
        </select>
        <label>Start Date</label>
        <input type="text" name="startDate" placeholder="YYYY-MM-DD" onChange={handleChange} />
        <label>End Date</label>
        <input type="text" name="endDate" placeholder="YYYY-MM-DD" onChange={handleChange} />
        <input type="submit" name="search" onClick={handleSearch} />
      </form>
    )
  }

  if (graphType === 'bar') {
    return (
      <div id="graph">
        { Form() }
        <Bar data={data} />
      </div>
    )
  } else if (graphType === 'line') {
    return (
      <div id="graph">
        { Form() }
        <Line data={data} />
      </div>
    )
  } else if (graphType === 'pie') {
    return (
      <div id="graph">
        { Form() }
        <Pie data={data} />
      </div>
    )
  }
};

export default Graph;
