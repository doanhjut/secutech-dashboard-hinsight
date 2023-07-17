/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const DonutChart = (props) => {
  const { chart } = props;

  const [chartData, setChartData] = useState({
    series: [44, 55],
    options: {
      chart: {
        type: 'pie',
      },
      labels: chart.labels,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });
  useEffect(() => {
    setChartData((prevState) => ({
      ...prevState,
      series: chart.datasets.data,
    }));
  }, [chart]);

  return (
    <div style={{paddingTop:"15px", display:'flex',justifyContent:'center'}}>
      <Chart options={chartData.options} series={chartData.series} type="donut" width="320" />
    </div>
  );
};

export default DonutChart;
