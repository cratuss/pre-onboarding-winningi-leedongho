import styled from 'styled-components';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLinkClickHandler, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginContext, BoardContext } from '../../App';

const BoardDetail = () => {
  const [data, setData] = useState('');
  const [dataIndex, setDataIndex] = useState('');

  const { loginData, setLoginData } = useContext(LoginContext);
  const { boardListData, setBoardListData } = useContext(BoardContext);

  const navigate = useNavigate();
  const params = useParams();

  const deleteHandler = () => {
    let test = boardListData;
    test.splice(dataIndex, 1);
    setBoardListData(test);
    navigate('../');
  };

  useEffect(() => {
    for (let i = 0; i < boardListData.length; i++) {
      if (String(boardListData[i].id) === String(params.id)) {
        setData(boardListData[i]);
        setDataIndex(i);
        break;
      }
    }
  }, []);

  return (
    <BoardDetailBlock>
      {data && (
        <>
          <p>{data.title}</p>
          <p>{data.time}</p>
          <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </>
      )}
      {loginData.id === data.writer && (
        <>
          <Button as='input' type='button' value='삭제' size='lg' onClick={() => deleteHandler()} />
          <Button as='input' type='button' value='수정' size='lg' onClick={() => navigate(`../modify/${data.id}`)} />
        </>
      )}
    </BoardDetailBlock>
  );
};

const BoardDetailBlock = styled.div`
  p {
    font: 2em/1.5 'Noto Sans KR';
  }
  div {
    width: 100%;
    height: 70vh;
    border: 1px solid black;
    margin-top: 10px;
    padding: 30px;
    font: 1.5em/1 'Noto Sans KR';
  }
  input {
    float: right;
    margin: 10px 10px 0 0;
  }
`;

export default BoardDetail;
