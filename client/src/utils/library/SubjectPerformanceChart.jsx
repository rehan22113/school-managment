import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const SubjectPerformanceChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
        name:"Performace %",
      data: [40, 23, 44, 47, 24, 98]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 400,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['English', 'Science', 'Computer', 'Math', 'Physics', 'Chemistry'],
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={chartData.options.chart.height} width={600} />
    </div>
  );
};

export default SubjectPerformanceChart;
