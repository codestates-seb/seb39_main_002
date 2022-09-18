import styled from "styled-components";
import { Link } from "react-router-dom";

function Addfood() {
  return (
    <Main>
      <div className="container">
        <div>
          <div className="title">
            <input placeholder="재료를 입력해주세요" />
            <h1> </h1>
          </div>
        </div>
        <div>
          <div className="tagText">
            <h2>분류</h2>
          </div>
          <div className="tagBox">
            <div className="tag">육류</div>
            <div className="tag">해산물</div>
            <div className="tag">채소/야채</div>
            <div className="tag">과일</div>
            <div className="tag">유제품</div>
            <div className="tag">음료</div>
            <div className="tag">가공품</div>
            <div className="tag">완제품</div>
            <div className="tag">조미료/양념</div>
            <div className="tag">기타</div>
          </div>
        </div>
        <div className="datas">
          <div className="data">
            <h2>수량</h2>
            <input></input>
          </div>
          <div className="data">
            <h2>유통기한</h2>
            <input></input>
          </div>
          {/* <div className="data">
            <h2>소비기한</h2>
            <input></input>
          </div> */}
        </div>
        <div className="bottomLink">
          <Link to="/colder" className="bottomButton">
            냉장실에 추가하기 ╋
          </Link>
          <Link to="/freezer" className="bottomButton">
            냉동실에 추가하기 ╋
          </Link>
        </div>
      </div>
    </Main>
  );
}

export const Main = styled.div`
  height: 92.6vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .container {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75vh;
    width: 40vw;
    background-color: #ffa249;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  input:focus {
    outline: none;
  }
  .title {
    width: 32vw;
    input {
      width: 250px;
      height: 40px;
      margin-top: 90px;
      border: none;
      background-color: #ffeddc;
      color: #ffa249;
      border-radius: 10px;
      padding: 5px;
      font-size: 22px;
      font-weight: bold;
      padding-left: 15px;
      margin-bottom: 20px;
    }
    input::placeholder {
      color: #ffa249;
      font-size: 22px;
      font-weight: bold;
    }
    h1::after {
      content: "";
      display: block;
      width: 200px;
      border-bottom: 3px solid white;
      margin: 30px auto;
    }
  }
  .tagText {
    width: 28vw;
    h2 {
      margin-bottom: 10px;
    }
  }
  .tagBox {
    width: 28vw;
    display: flex;
    flex-wrap: wrap;
  }
  .tag {
    width: 80px;
    height: 40px;
    margin: 10px;
    font-weight: bold;
    font-size: 15px;
    color: #ff7a00;
    background-color: #ffd6af;
    border-radius: 30px;
    text-align: center;
    line-height: 40px;
  }
  .datas {
    justify-content: center;
    width: 28vw;
    /* display: flex;
    flex-direction: column; */
  }
  .data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      height: 40px;
      width: 240px;
      border-radius: 7px;
      border: none;
      margin-right: 100px;
      background-color: #ffeddc;
      color: #ffa249;
      font-size: 20px;
      font-weight: bold;
    }
  }
  .bottomLink {
    a {
    }
  }
`;

export default Addfood;
