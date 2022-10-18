import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/');
  };

  return (
    <NavigationBlock>
      <ul>
        <li>
          <img src={companymark} alt={'companymark'} onClick={() => clickHandler()} />
        </li>
        <li>
          <Link to='bookableList'>예약 하기</Link>
        </li>
        <li>
          <Link to='booked'>예약 조회</Link>
        </li>
      </ul>
    </NavigationBlock>
  );
};

const NavigationBlock = styled.div``;

export default Navigation;
