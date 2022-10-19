import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement } from 'chart.js';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, Title, Tooltip, Legend, PointElement, ChartDataLabels);

const visitorOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '월별 방문자 추이',
    },
    datalabels: {
      display: false,
    },
  },
};

const userOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '사용자 연령대',
    },
    datalabels: {
      display: true,
      color: '#36A2EB',
    },
  },
};

const boardOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '월별 게시글 등록수',
    },
    datalabels: {
      display: false,
    },
  },
};
const mainLabels = ['7월', '8월', '9월', '10월'];
const userLabels = ['10대', '20대', '30대', '40대', '50대', '60대'];

const visitorData = {
  labels: mainLabels,
  datasets: [
    {
      label: '방문자수',
      data: mainLabels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const userData = {
  labels: userLabels,
  datasets: [
    {
      label: 'test',
      data: userLabels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
    },
  ],
};

const boardData = {
  labels: mainLabels,
  datasets: [
    {
      label: '등록수',
      data: mainLabels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const ChartArea = () => {
  return (
    <ChartBlock>
      <div>
        <Line options={visitorOptions} data={visitorData} width={300} height={300} />
      </div>
      <div>
        <Pie options={userOptions} data={userData} />
      </div>
      <div>
        <Bar options={boardOptions} data={boardData} width={300} height={300} />
      </div>
    </ChartBlock>
  );
};

const ChartBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 50px;
  div {
    width: 33%;
  }
`;

export default ChartArea;
