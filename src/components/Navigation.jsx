import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiClipboard, FiSettings, FiPower, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useEffect, useState, useContext } from 'react';
import { LoginContext, MinimalContext } from '../App';

const Navigation = () => {
  const [hide, setHide] = useState(true);

  const { loginData, setLoginData } = useContext(LoginContext);
  const { navMinimal, setNavMinimal } = useContext(MinimalContext);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/');
  };

  const navSlide = () => {
    setNavMinimal(!navMinimal);
  };

  useEffect(() => {
    setHide(!hide);
  }, [loginData]);

  return (
    <NavigationBlock style={{ width: navMinimal ? '5%' : '18%' }}>
      <UserBolock onClick={() => navigate('../../../')}>
        <FiUser />
        {!navMinimal && (
          <>
            {!loginData && <span>로그인 해주세요</span>}
            {loginData && <span>{loginData.name}</span>}
          </>
        )}
      </UserBolock>
      <SlideBlock onClick={() => navSlide()}>
        {!navMinimal && <FiArrowLeft />}
        {navMinimal && <FiArrowRight />}
      </SlideBlock>
      <ul>
        <li onClick={() => navigate('board')}>
          <FiClipboard />
          {!navMinimal && <span>게시판</span>}
        </li>
        <li onClick={() => alert('준비중입니다.')}>
          <FiSettings />
          {!navMinimal && <span>개인설정</span>}
        </li>
      </ul>
      <LogBlock>
        {loginData && (
          <>
            <div
              onClick={() => {
                localStorage.removeItem('name');
                setLoginData('');
              }}
            >
              <FiPower />
              {!navMinimal && <span>로그아웃</span>}
            </div>
          </>
        )}
      </LogBlock>
    </NavigationBlock>
  );
};

const NavigationBlock = styled.div`
  position: fixed;
  left: 0;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid #000000;
  font: 2em/1 'Noto Sans KR';
  @media screen and (max-width: 1480px) {
    font: 1.5em/1 'Noto Sans KR';
  }
  @media screen and (max-width: 1132px) {
    font: 1em/1 'Noto Sans KR';
  }
  span {
    margin-left: 10px;
  }
  li {
    display: flex;
    margin: 0 0 80px 0;

    cursor: pointer;
  }
`;
const UserBolock = styled.div`
  position: absolute;
  top: 10vh;
  display: flex;
  cursor: pointer;
  svg {
    font-size: 1.3em;
  }
  span {
    padding-bottom: 5px;
    border-bottom: 1px solid black;
  }
`;

const LogBlock = styled.div`
  position: absolute;
  bottom: 10vh;
  display: flex;
  cursor: pointer;
`;

const SlideBlock = styled.div`
  position: absolute;
  top: 1.5vh;
  right: 1.5vw;
  cursor: pointer;
`;

export default Navigation;
