import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const options2 = {
  legend: { display: true, position: 'right' },

  datalabels: {
    display: true,
    color: 'white',
  },
  tooltips: {
    backgroundColor: '#5a6e7f',
  },
};

const labels = ['7월', '8월', '9월', '10월'];

const data = {
  labels,
  datasets: [
    {
      label: '등록수',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

let data1 = [9, 5, 3];
let labels1 = ['Newly Added', 'Edited', 'Deleted'];

let customLabels = labels1.map((label, index) => `${label}: ${data1[index]}`);

const chartdata = {
  labels: customLabels,
  datasets: [
    {
      label: 'Markets Monitored',
      backgroundColor: ['#83ce83', '#959595', '#f96a5d', '#00A6B4', '#6800B4'],
      data: data1,
    },
  ],
};

// export const data2 = {
//   labels: customLabels,
//   datasets: [
//     {
//       label: 'markets',
//       data: dataValue,
//       backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
//       borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
//       borderWidth: 1,
//     },
//   ],
// };

const ChartArea = () => {
  return (
    <ChartBlock>
      <Bar options={options} data={data} />
      <Line options={options} data={data} />
      <Pie
        options={{
          title: {
            display: true,
            text: 'Topicwise Distribution',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
        data={chartdata}
      />
    </ChartBlock>
  );
};

const ChartBlock = styled.div`
  width: 33%;
`;

export default ChartArea;
