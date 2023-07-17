/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const SemiCircleGauge = (props) => {
  const { data } = props;

  const [series, setSeries] = useState(70);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = (Math.random() * 2) - 1;
      const a =series + randomValue
      if(a > 50){
        if(a>100){
          setSeries(100);
        }else{
          setSeries(a);
        }
      }else{
        setSeries(50)
      }
    }, 1000);

    return () => {
      clearInterval(interval); // Xóa interval khi component unmount
    };
  }, []);
  const options = {
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        hollow: {
          margin: 0,
          size: "70%",
          // background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "97%",
          margin: 5,
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            fontSize: "16px",
            color: "#888",
          },
          value: {
            formatter: function (val) {
              return parseInt(val) + "%";
            },
            color: "#fff",
            fontSize: "28px",
            show: true,
          },
        },
      },
    },
    fill: {
      colors: ["#FF0000"],
    },
    series: [Math.round(series)],
    labels: [""],
  };

  return (
    <div style={{height:'100px'}}>
      <Chart options={options} series={options.series} type="radialBar" height={135} />
    </div>
  );
};

export default SemiCircleGauge;
