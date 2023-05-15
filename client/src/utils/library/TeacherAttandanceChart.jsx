import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const TeacherAttandanceChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: "Desktops",
      data: [10, 41, 20, 30, 10, 20, 30, 30, 18]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: '',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={chartData.options.chart.height} />
    </div>
  );
};

export default TeacherAttandanceChart;
