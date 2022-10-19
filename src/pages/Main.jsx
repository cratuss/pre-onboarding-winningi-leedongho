import styled from 'styled-components';
import Header from '../components/Main/Header';
import ChartArea from '../components/Main/ChartArea';
import Footer from '../components/Main/Footer';

const Main = () => {
  return (
    <MainBlock>
      <Header />
      <ChartArea />
      <Footer />
    </MainBlock>
  );
};

const MainBlock = styled.div`
  positin: relative;
  height: 100%;
  margin-left: 18%;
  padding: 20px;
  border: 1px solid black;
`;

export default Main;
