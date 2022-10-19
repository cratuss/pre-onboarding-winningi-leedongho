import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
