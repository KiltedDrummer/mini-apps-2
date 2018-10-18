import React from 'react';
import Chart from 'chart.js';
import { Bar } from 'react-chartjs-2';

const Graph = ({ dates, prices}) => {
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
      label: ['Date'],
      data: prices,
      backgroundColor: ['rgba(203, 37, 37, 1)'],
      borderColor: ['rgba(128, 128, 128, 1)'],
      borderWidth: 1,
    }],
  };

  return (
    <div id="graph">
      <Bar data={data} />
    </div>
  )
};

export default Graph;
