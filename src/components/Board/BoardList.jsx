import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoardContext } from '../../App';
import Header from './Header';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoardList = () => {
  const navigate = useNavigate();

  const { boardListData, setBoardListData } = useContext(BoardContext);

  useEffect(() => {
    console.log(boardListData);
  }, [boardListData]);

  return (
    <>
      <Header title={'게시판'} />
      <BoardAreaBlock>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성시간</th>
            </tr>
          </thead>
          <tbody>
            {boardListData && (
              <>
                {boardListData.map((boardOne, index) => {
                  return (
                    <tr key={boardOne + index}>
                      <td width={5}>{index}</td>
                      <td width={500} className='click' onClick={() => navigate(`./${boardOne.id}`)}>
                        {boardOne.title}
                      </td>
                      <td width={100}>{boardOne.name}</td>
                      <td width={100}>{boardOne.time}</td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </Table>
      </BoardAreaBlock>
    </>
  );
};

const BoardAreaBlock = styled.div`
  text-align: center;
  .click {
    cursor: pointer;
  }
`;

export default BoardList;
