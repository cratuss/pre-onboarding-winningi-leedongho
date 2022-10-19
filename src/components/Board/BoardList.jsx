import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { BoardContext } from '../../App';
import Header from './Header';

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
                {boardListData.map((el, index) => {
                  return (
                    <tr key={index}>
                      <td width={5}>{index}</td>
                      <td width={500} className='click' onClick={() => navigate(`./${el.id}`)}>
                        {el.title}
                      </td>
                      <td width={100}>{el.name}</td>
                      <td width={100}>{el.time}</td>
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
