import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function Find() {
  const [nickname, setNickname] = useState("");
  const [leftEmail, setLeftEmail] = useState("");
  const [id, setId] = useState("");
  const [rightEmail, setRightEmail] = useState("");
  function findHandler(e) {
    //post를 위한 axios까지는 해두고 넘어가기
    if (e.target.value === "ID") {
      //유저 이름과 이메일이 일치하는 ID가 있는 경우
      //ID 를 이메일로 보내주기
      alert(`유저 이름 : ${nickname}\n이메일 : ${leftEmail}`);
      //프론트에서 아이디 출력
    } else if (e.target.value === "Password") {
      //ID와 이메일이 일치하는 ID가 있는 경우
      //Password를 랜덤으로 변경한 다음
      //서버(DB?)로 바뀐 Password를 수정하고 이메일로 보내주기
      alert(`ID : ${id}\n이메일 : ${rightEmail}`);
      //비밀번호@
    }
  }
  function nicknameHandler(e) {
    setNickname(e.target.value);
  }
  function leftEmailHandler(e) {
    setLeftEmail(e.target.value);
  }
  function idHandler(e) {
    setId(e.target.value);
  }
  function rightEmailHandler(e) {
    setRightEmail(e.target.value);
  }
  return (
    <Main>
      <div className="container">
        <div className="text">ID / 비밀번호 찾기</div>
        <div className="boxes">
          <div className="box box1">
            <div className="boxTitle1">
              <span>ID 찾기</span>
            </div>
            <div className="inputBox">
              <div className="inputDiv">
                <span>유저 이름</span>
                <input onChange={nicknameHandler} value={nickname}></input>
              </div>
              <div className="inputDiv">
                <span>이메일</span>
                <input onChange={leftEmailHandler} value={leftEmail}></input>
              </div>
            </div>
            <div className="buttonBox">
              <button className="button1" value={"ID"} onClick={findHandler}>
                찾기
              </button>
            </div>
          </div>
          <div className="box box2">
            <div className="boxTitle2">
              <span>비밀번호 찾기</span>
            </div>
            <div className="inputBox">
              <div className="inputDiv">
                <span>ID</span>
                <input onChange={idHandler} value={id}></input>
              </div>
              <div className="inputDiv">
                <span>이메일</span>
                <input onChange={rightEmailHandler} value={rightEmail}></input>
              </div>
            </div>
            <div className="buttonBox">
              <button
                className="button2"
                value={"Password"}
                onClick={findHandler}
              >
                찾기
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export const Main = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    font-size: 33px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .boxes {
    width: 70vw;
    height: 50vh;
    display: flex;
    justify-content: center;
  }
  .boxTitle1 {
    width: 30vw;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-left: 2.5vw;
    padding-bottom: 80px;
    border-bottom: #222222 solid 1px;
  }
  .boxTitle2 {
    width: 30vw;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-left: 2.5vw;
    padding-bottom: 80px;
    border-bottom: white solid 1px;
  }
  .box {
    width: 35vw;
    height: 50vh;
    border-radius: 10px;
  }
  .box1 {
    background-color: #e4e4e4;
  }
  .box2 {
    color: #e9e9e9;
    background-color: #222222;
  }
  .inputBox {
    margin-top: 50px;
  }
  .inputDiv {
    margin-left: 8vw;
    width: 20vw;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 20px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }
  }
  input {
    width: 240px;
    height: 28px;
    border-radius: 2px;
    border: none;
    margin: 10px;
    font-size: 17px;
  }
  input:focus {
    outline: none;
  }
  .buttonBox {
    display: flexs;
    justify-content: center;
    margin-top: 50px;
    button {
      width: 140px;
      height: 40px;
      border: none;
      border-radius: 4px;
      font-size: 19px;
      font-weight: 600;
    }
    .button1 {
      color: white;
      background-color: #222222;
    }
    .button2 {
      color: black;
    }
  }
`;

export default Find;
