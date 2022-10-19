import styled from 'styled-components';
import Header from '../components/Main/Header';
import ChartArea from '../components/Main/ChartArea';
import Footer from '../components/Main/Footer';
import { MinimalContext } from '../App';
import { useContext } from 'react';

const Main = () => {
  const { navMinimal, setNavMinimal } = useContext(MinimalContext);

  return (
    <MainBlock minimal={navMinimal}>
      <Header />
      <ChartArea />
      <Footer />
    </MainBlock>
  );
};

const MainBlock = styled.div`
  positin: relative;
  height: 100%;
  margin-left: ${props => {
    if (props.minimal) {
      return '5%';
    } else if (!props.minimal) {
      return '18%';
    }
  }};
  padding-top: 90px
  border: 1px solid black;
`;

export default Main;
