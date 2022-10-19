import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { UserContext, LoginContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
  const { loginData, setLoginData } = useContext(LoginContext);

  const navigate = useNavigate();

  return (
    <HeaderBlock>
      <div>
        <p>{title}</p>
      </div>
      {loginData && title === '게시판' && (
        <Button variant='primary' size='lg' onClick={() => navigate('./write')}>
          글쓰기
        </Button>
      )}
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  .input-group {
    width: 30%;
  }
  p {
    font: 2em/1 'Noto Sans KR';
  }
`;

export default Header;
