/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RealtimeChart = (props) => {
  const dataChart = props.data;

  const [options, setOptions] = useState({
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 2000
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
      labels: {
        formatter: function (value) {
          return moment(value).format('HH:mm:ss');
        },
        style: {
          colors: ['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'] // Màu sắc chữ của trục x
        },
      },
      range: 2000
    },
    yaxis: {
      autoScaleYaxis: true,
      labels: {
        style: {
          colors: ['#ffffff'] // Màu sắc chữ của trục y
        }
      }
    },
    legend: {
      show: false
    }
  });

  const [series, setSeries] = useState([
    {
      data: [
        {x: new Date().getTime(), y: 0}
      ]
    }
  ]);

  useEffect(() => {
    const newData = [...series[0].data, dataChart];
    setSeries([
      {
        data: newData
      }
    ]);
  }, [dataChart]);

  return <ReactApexChart options={options} series={series} type="line" height={275} width={600} />;
};

export default RealtimeChart;
