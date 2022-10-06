import styled from "styled-components";
import loginmain from "./img/로그인메인1.jpeg";
import freezer from "./img/냉동실.jpeg";
import colder from "./img/냉장실.jpeg";
import { Link } from "react-router-dom";
import Carousel from "./components/Carousel";
import { FaArrowRight } from "react-icons/fa";

const Loginmain = ({ setTokenEmail, recipe }) => {
  return (
    <Container>
      <Div>
        <div className="background1">
          <div className="blackbox1">
            <Link to="/refrigerator">
              <p className="text1">
                손쉽게 냉장고 관리하고<br></br>레시피 추천받기
              </p>
            </Link>
          </div>
        </div>
        <div className="background23">
          <div className="background2">
            <div className="blackbox2">
              <Link to="/freezer">
                <p className="text23">냉동실 관리하기</p>
              </Link>
            </div>
          </div>
          <div className="background3">
            <div className="blackbox3">
              <Link to="/colder">
                <p className="text23">냉장실 관리하기</p>
              </Link>
            </div>
          </div>
        </div>
      </Div>
      <div className="content">
        <p className="text4">{setTokenEmail.nickname}님의 추천 레시피</p>
        <Carousel recipe={recipe} />
        <Link to="/recommendation">
          <div className="text2container">
            <p className="text2">레시피 더 둘러보기</p>
            <FaArrowRight size="40" className="icon" />
          </div>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200vh;
  margin: 0;
  padding: 0;
  overflow: hidden;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
  .text4 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-top: 5rem;
  }
  .text2container {
    margin-top: 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .text2 {
    font-size: 2rem;
    font-weight: bold;
  }
  .icon {
    padding-left: 1rem;
  }

  a {
    text-decoration: none;
  }
  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  .background23 {
    display: flex;
    flex-direction: column;
  }

  .background1 {
    width: 50vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${loginmain});
  }
  .background2 {
    width: 50vw;
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${freezer});
  }
  .background3 {
    width: 50vw;
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${colder});
  }
  .blackbox1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .blackbox2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 50vh;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .blackbox3 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 50vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .text1 {
    margin: 0;
    text-align: center;
    color: white;
    font-size: 2.1rem;
    font-weight: 600;
    line-height: 3rem;
  }
  .text23 {
    margin: 0;
    text-align: center;
    color: white;
    font-size: 1.7rem;
    font-weight: 600;
  }
`;

export default Loginmain;
