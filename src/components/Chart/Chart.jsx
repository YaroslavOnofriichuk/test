import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Section } from './Chart.Styled';
import PropTypes from 'prop-types';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = ({ chartData, displayChart }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${displayChart} chart`,
      },
    },
  };

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.values,
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  };

  return (
    <Section>
      {displayChart === 'bar' && <Bar options={options} data={data} />}
      {displayChart === 'line' && <Line options={options} data={data} />}
      {displayChart === 'pie' && <Pie options={options} data={data} />}
    </Section>
  );
};

Chart.propTypes = {
  displayChart: PropTypes.string,
  chartData: PropTypes.object,
};
