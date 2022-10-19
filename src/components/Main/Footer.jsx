import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const logoUrl = 'http://www.winningi.com/theme/basic/img/common/img_flogo.svg';

  const navigate = useNavigate();

  return (
    <FooterBlock>
      <img src={logoUrl} alt='logo' onClick={() => navigate('../../../')}></img>
      <address>
        Zipcode 08381 9F #908 , 285, Digital-ro, Guro-gu, Seoul, Republic of Korea
        <br />
        Tel : +82-70-7700-3525 E-mail : winningi@winningi.com
        <span>&nbsp;개인정보처리방침</span>
      </address>
    </FooterBlock>
  );
};

const FooterBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ececec;
  padding: 20px;
  font: 1em/1.3 'Noto Sans KR';
  img {
    width: 153px;
    hegith: 94px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

export default Footer;
