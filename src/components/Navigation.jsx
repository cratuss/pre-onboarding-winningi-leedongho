import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiClipboard, FiSettings, FiPower } from 'react-icons/fi';

const Navigation = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/');
  };

  return (
    <NavigationBlock>
      <UserBolock>
        <FiUser />
        <Link to='bookableList'>user1</Link>
      </UserBolock>
      <ul>
        <li>{/* <img src={companymark} alt={'companymark'} onClick={() => clickHandler()} /> */}</li>
        <li>
          <FiClipboard />
          <Link to='bookableList'>게시판</Link>
        </li>
        <li>
          <FiSettings />
          <Link to='booked'>개인설정</Link>
        </li>
      </ul>
      <LogBlock>
        <FiPower />
        <Link to='bookableList'>로그아웃</Link>
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
  flex-direction: column;
  border-right: 1px solid #000000;
  padding-left: 5vw;
  font: 2em/1 'Noto Sans KR';
  a {
    color: black;
    margin-left: 10px;
  }
  li {
    display: flex;
    margin: 0 0 80px 0;
    img {
      width: 80%;
      cursor: pointer;
    }
  }
`;
const UserBolock = styled.div`
  position: fixed;
  top: 10vh;
  display: flex;
  svg {
    font-size: 1.3em;
  }
  a {
    padding-bottom: 5px;
    border-bottom: 1px solid black;
  }
`;

const LogBlock = styled.div`
  position: fixed;
  bottom: 10vh;
  display: flex;
`;

export default Navigation;
