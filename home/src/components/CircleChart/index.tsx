import React from 'react';
import { useTheme } from '@mui/material';
import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const CircleChart: React.FC = () => {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: { background: 'transparent', stacked: false, toolbar: { show: false } },
    plotOptions: { pie: { donut: { size: '60%' } } },
    colors: [ '#ff9900', '#1c81c2', '#333', '#5c6ac0' ],
    dataLabels: {
      enabled: true,
      formatter: val =>  val + '%',
      style: { colors: [theme.colors.alpha.trueWhite[100]] },
      background: {
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8, enabled: true, borderRadius: 4, borderWidth: 0, opacity: 0.3,
        dropShadow: { enabled: true, top: 1, left: 1, blur: 1, color: theme.colors.alpha.black[70], opacity: 0.5 }
      },
      dropShadow: { enabled: true, top: 1, left: 1, blur: 1, color: theme.colors.alpha.black[50], opacity: 0.5 }
    },
    fill: { opacity: 1 },
    labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum'],
    legend: { labels: { colors: theme.colors.alpha.trueWhite[100] }, show: false },
    stroke: { width: 0 },
    theme: { mode: theme.palette.mode }
  };

  const chartSeries = [10, 20, 25, 45];

  return <Chart height={250} options={chartOptions} series={chartSeries} type="donut" />
}

export default CircleChart;