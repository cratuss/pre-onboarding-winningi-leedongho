import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import BoardList from '../components/Board/BoardList';
import BoardDetail from '../components/Board/BoardDetail';
import BoardWrite from '../components/Board/BoardWrite';
import Footer from '../components/Main/Footer';
import BoardModify from '../components/Board/BoardModify';
import { useContext } from 'react';
import { MinimalContext } from '../App';

const Board = () => {
  const { navMinimal, setNavMinimal } = useContext(MinimalContext);

  return (
    <BoardBlock minimal={navMinimal}>
      <Routes>
        <Route path='/' element={<BoardList />} />
        <Route path='/:id' element={<BoardDetail />} />
        <Route path='/write' element={<BoardWrite />} />
        <Route path='/modify/:id' element={<BoardModify />} />
      </Routes>
      <Footer />
    </BoardBlock>
  );
};

const BoardBlock = styled.div`
  positin: relative;
  height: 100%;

  margin-left: ${props => {
    if (props.minimal) {
      return '5%';
    } else if (!props.minimal) {
      return '18%';
    }
  }};
  padding: 90px;
`;

export default Board;
