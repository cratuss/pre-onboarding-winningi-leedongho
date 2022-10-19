import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import { BoardContext } from '../../App';
import ReactQuill from 'react-quill';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import 'react-quill/dist/quill.snow.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BoardModify = () => {
  const [contentValue, setContentValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  const [data, setData] = useState('');
  const [dataIndex, setDataIndex] = useState('');

  const navigate = useNavigate();
  const params = useParams();

  const { boardListData, setBoardListData } = useContext(BoardContext);

  const completeHandler = () => {
    let date = new window.Date();
    let time = String(date.getFullYear()).substr(2, 2) + '.' + (date.getMonth() + 1) + '.' + date.getDate();
    boardListData[dataIndex].title = titleValue;
    boardListData[dataIndex].content = contentValue;
    boardListData[dataIndex].time = time;
    navigate('../');
  };

  const titleChangeHandler = word => {
    setTitleValue(word.currentTarget.value);
  };

  useEffect(() => {
    for (let i = 0; i < boardListData.length; i++) {
      if (String(boardListData[i].id) === String(params.id)) {
        setData(boardListData[i]);
        setDataIndex(i);
        setContentValue(boardListData[i].content);
        break;
      }
    }
  }, []);

  return (
    <>
      <Header title={'글수정'} />
      <BoardWriteBlock>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='inputGroup-sizing-default'>제목</InputGroup.Text>
          <Form.Control aria-label='Default' aria-describedby='inputGroup-sizing-default' onChange={word => titleChangeHandler(word)} defaultValue={data.title} />
        </InputGroup>
        <br />

        <ReactQuill theme='snow' value={contentValue} onChange={setContentValue} />
        <Button as='input' type='button' value='취소' size='lg' onClick={() => navigate('../')} />
        <Button as='input' type='button' value='완료' size='lg' onClick={() => completeHandler()} disabled={contentValue && titleValue ? false : true} />
      </BoardWriteBlock>
    </>
  );
};

const BoardWriteBlock = styled.div`
  .btn-primary {
    float: right;
    margin: 10px 10px 0 0;
  }
`;

export default BoardModify;
