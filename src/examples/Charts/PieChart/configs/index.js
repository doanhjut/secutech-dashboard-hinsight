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
        type: 'donut',
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
      }],
      legend: {
        labels: {
          colors: ['#ffffff'], // Màu sắc của chữ trong chú thích
        },
      },
    },
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newSeries = chartData.series.map((value) => value + Math.floor(Math.random() * 10));
  //     setChartData((prevState) => ({
  //       ...prevState,
  //       series: newSeries,
  //     }));
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  useEffect(() => {
    setChartData((prevState) => ({
      ...prevState,
      series: chart.datasets.data,
    }));
  }, [chart]);

  return (
    <div style={{paddingTop:"15px"}}>
      <Chart options={chartData.options} series={chartData.series} type="donut" width="345"/>
    </div>
  );
};

export default DonutChart;
