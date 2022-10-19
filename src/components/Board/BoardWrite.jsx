import styled from 'styled-components';
import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Header from './Header';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { BoardContext, LoginContext } from '../../App';

const BoardWrite = () => {
  const [contentValue, setContentValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  const navigate = useNavigate();

  const { boardListData, setBoardListData } = useContext(BoardContext);
  const { loginData, setLoginData } = useContext(LoginContext);

  const completeHandler = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    let date = new window.Date();
    let time = String(date.getFullYear()).substr(2, 2) + '.' + (date.getMonth() + 1) + '.' + date.getDate();
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    boardListData.push({
      id: result,
      title: titleValue,
      writer: 'user3',
      name: loginData.name,
      time: time,
      content: contentValue,
    });
    navigate('../');
  };

  const titleChangeHandler = word => {
    setTitleValue(word.currentTarget.value);
  };

  const contentChangeHandler = word => {
    setContentValue(word.currentTarget.value);
  };

  return (
    <>
      <Header title={'글쓰기'} />
      <BoardWriteBlock>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='inputGroup-sizing-default'>제목</InputGroup.Text>
          <Form.Control aria-label='Default' aria-describedby='inputGroup-sizing-default' onChange={word => titleChangeHandler(word)} />
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

export default BoardWrite;
