/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RealtimeChart = () => {
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
          colors: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",], // Màu sắc của chữ trong biểu đồ
        },
      },
      range: 2000
    },
    yaxis: {
      autoScaleYaxis: true,
      labels: {
        style: {
          colors: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",], // Màu sắc của chữ trong biểu đồ
        },
      }
    },
    legend: {
      show: false
    }
  });

  const [series, setSeries] = useState([
    {
      data: []
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newDataPoint;
      const currentHour = new Date().getHours();
      if (currentHour >= 8 && currentHour < 9) {
        newDataPoint = {
          x: new Date().getTime(),
          y: Math.floor(Math.random() * 5) + 1
        };
      } else if (currentHour >= 9 && currentHour < 10) {
        newDataPoint = {
          x: new Date().getTime(),
          y: Math.floor(Math.random() * 10) + 1
        };
      } else if (currentHour >= 10 && currentHour < 11) {
        newDataPoint = {
          x: new Date().getTime(),
          y: Math.floor(Math.random() * 15) + 1
        };
      } else if (currentHour >= 11 && currentHour < 12) {
        newDataPoint = {
          x: new Date().getTime(),
          y: Math.floor(Math.random() * 20) + 1
        };
      } else if (currentHour >= 12 && currentHour < 13) {
        newDataPoint = {
          x: new Date().getTime(),
          y: Math.floor(Math.random() * 1) + 1
        };
      } else if (currentHour >= 13 && currentHour < 14) {
        newDataPoint = {
          x: new Date().getTime(),
          y: Math.floor(Math.random() * 2) + 1
        };
      } else if (currentHour >= 14 && currentHour < 15) {
        newDataPoint = {
          x: new Date().getTime(),
          y: Math.floor(Math.random() * 5) + 1
        };
      } else if (currentHour >= 15 && currentHour < 16) {
        newDataPoint = {
          x: new Date().getTime(),
          y: Math.floor(Math.random() * 12) + 1
        };
      }else {
        newDataPoint = {
          x: new Date().getTime(),
          y: Math.floor(Math.random() * 5) + 1
        };
      }
      setSeries(prevSeries => {
        const newData = [...prevSeries[0].data, newDataPoint];
        return [
          {
            data: newData
          }
        ];
      });
    }, 2000);

    return () => {
      clearInterval(interval); // Xóa interval khi component unmounts
    };
  }, []);

  return <ReactApexChart options={options} series={series} type="line" height={275} width={600} />;
};

export default RealtimeChart;
