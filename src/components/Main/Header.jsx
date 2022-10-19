import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { UserContext, LoginContext } from '../../App';

const Header = () => {
  const [userName, setUserName] = useState('');

  const { allUserData, setAllUserData } = useContext(UserContext);
  const { loginData, setLoginData } = useContext(LoginContext);

  const loginHandler = () => {
    let loginState = false;
    for (let i = 0; i < allUserData.length; i++) {
      if (allUserData[i].id === userName) {
        setLoginData(allUserData[i]);
        loginState = true;
        break;
      }
    }
    if (loginState) {
      localStorage.setItem('name', JSON.stringify(userName));
    } else {
      alert('로그인 정보를 확인해주세요');
    }
  };

  const changeHandler = word => {
    setUserName(word.currentTarget.value);
  };

  return (
    <HeaderBlock>
      <div>
        <p>메인</p>
      </div>

      {!loginData && (
        <InputGroup className='mb-3'>
          <InputGroup.Text id='inputGroup-sizing-default'>아이디</InputGroup.Text>
          <Form.Control aria-label='Default' aria-describedby='inputGroup-sizing-default' placeholder='아이디를 입력해주세요' onChange={word => changeHandler(word)} />
          <Button variant='primary' size='lg' onClick={() => loginHandler()}>
            로그인
          </Button>
        </InputGroup>
      )}
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 70px 50px 0 50px;
  .input-group {
    width: 30%;
    @media screen and (max-width: 1132px) {
      span {
        font-size: 0.7rem;
        padding: 1px;
      }
      input {
        font-size: 0.7rem;
        padding: 1px;
      }
      button {
        font-size: 0.7rem;
        padding: 1px;
      }
    }
  }
  p {
    font: 2em/1 'Noto Sans KR';
  }
`;

export default Header;
