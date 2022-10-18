import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiClipboard, FiSettings, FiPower, FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';

const Navigation = () => {
  const [navMinimal, setNavMinimal] = useState(false);

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/');
  };

  const navSlide = () => {
    setNavMinimal(!navMinimal);
  };

  return (
    <NavigationBlock style={{ width: navMinimal ? '5%' : '18%' }}>
      <UserBolock>
        <FiUser />
        {!navMinimal && <span>user1</span>}
      </UserBolock>
      <SlideBlock onClick={() => navSlide()}>
        <FiArrowLeft />
      </SlideBlock>
      <ul>
        <li onClick={() => navigate('board')}>
          <FiClipboard />
          {!navMinimal && <span>게시판</span>}
        </li>
        <li onClick={() => navigate('setting')}>
          <FiSettings />
          {!navMinimal && <span>개인설정</span>}
        </li>
      </ul>
      <LogBlock>
        <FiPower />
        {!navMinimal && <span>로그아웃</span>}
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
  span {
    margin-left: 10px;
  }
  li {
    display: flex;
    margin: 0 0 80px 0;

    cursor: pointer;
    img {
      width: 80%;
      cursor: pointer;
    }
  }
`;
const UserBolock = styled.div`
  position: absolute;
  top: 10vh;
  display: flex;
  cursor: default;
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
