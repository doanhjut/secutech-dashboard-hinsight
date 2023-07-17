/* eslint-disable prettier/prettier */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const [reportsBarChartData, setReportsBarChartData] = useState({
    labels: [
      "8h-9h",
      "9h-10h",
      "10h-11h",
      "11h-12h",
      "12h-13h",
      "13h-14h",
      "14h-15h",
      "15h-16h",
      "16h-17h",
    ],
    datasets: [300, 500, 900, 1200, 50, 100, 300, 800, 150],
  });

  const chartData = {
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: reportsBarChartData.labels,
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
              "#ffffff",
            ], // Màu sắc của chữ trong biểu đồ
          },
        },
      },
      yaxis: {
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
        },
      },
    },
    series: [
      {
        data: reportsBarChartData.datasets,
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentHour = new Date().getHours();
      if (currentHour >= 8 && currentHour < 9) {
        setReportsBarChartData({
          labels: [
            "8h-9h",
            "9h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
          ],
          datasets: [10, 0, 0, 0, 0, 0, 0, 0, 0],
        });
      } else if (currentHour >= 9 && currentHour < 10) {
        setReportsBarChartData({
          labels: [
            "8h-9h",
            "9h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
          ],
          datasets: [300, 0, 0, 0, 0, 0, 0, 0, 0],
        });
      } else if (currentHour >= 10 && currentHour < 11) {
        setReportsBarChartData({
          labels: [
            "8h-9h",
            "9h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
          ],
          datasets: [300, 500, 0, 0, 0, 0, 0, 0, 0],
        });
      } else if (currentHour >= 11 && currentHour < 12) {
        setReportsBarChartData({
          labels: [
            "8h-9h",
            "9h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
          ],
          datasets: [300, 500, 900, 0, 0, 0, 0, 0, 0],
        });
      } else if (currentHour >= 12 && currentHour < 13) {
        setReportsBarChartData({
          labels: [
            "8h-9h",
            "9h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
          ],
          datasets: [300, 500, 900, 1200, 0, 0, 0, 0, 0],
        });
      } else if (currentHour >= 13 && currentHour < 14) {
        setReportsBarChartData({
          labels: [
            "8h-9h",
            "9h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
          ],
          datasets: [300, 500, 900, 1200, 50, 0, 0, 0, 0],
        });
      } else if (currentHour >= 14 && currentHour < 15) {
        setReportsBarChartData({
          labels: [
            "8h-9h",
            "9h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
          ],
          datasets: [300, 500, 900, 1200, 50, 100, 0, 0, 0],
        });
      } else if (currentHour >= 15 && currentHour < 16) {
        setReportsBarChartData({
          labels: [
            "8h-9h",
            "9h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
          ],
          datasets: [300, 500, 900, 1200, 50, 100, 300, 0, 0],
        });
      } else if(currentHour >= 16 && currentHour < 17) {
        setReportsBarChartData({
          labels: [
            "8h-9h",
            "9h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
          ],
          datasets: [300, 500, 900, 1200, 50, 100, 300, 800, 0],
        });
      }else{
        setReportsBarChartData({
          labels: [
            "8h-9h",
            "9h-10h",
            "10h-11h",
            "11h-12h",
            "12h-13h",
            "13h-14h",
            "14h-15h",
            "15h-16h",
            "16h-17h",
          ],
          datasets: [300, 500, 900, 1200, 50, 100, 300, 800, 300],
        });
      }
    }, 2000);
    return () => {
      clearInterval(interval); // Xóa interval khi component unmounts
    };
  }, []);

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={275}
      width={600}
    />
  );
};

export default BarChart;
