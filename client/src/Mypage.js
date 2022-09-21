import styled from "styled-components";
import axios from "axios";

function Mypage() {
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  function modifyProfile(nickname, memberEmail, memberPassword) {
    axios
      .PATCH(
        "http://15.164.53.160:8080/v1/members/modify",
        //+id(이 부분은 ) 유저 로그인 데이터에서 받아와야하기 때문에 params로 못함
        {
          password: memberPassword,
          email: memberEmail,
          nickname: nickname,
        }
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          alert(`${nickname}` + "`s profile changed");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const nickname = event.target[0].value;
    const memberEmail = event.target[1].value;
    const memberPassword = event.target[2].value;
    let Error = [];
    if (nickname.length < 2 || nickname.length > 10) {
      Error.push(`Wrong name\nname should be 2~10 length`);
    }
    if (memberPassword.match(passwordRegEx) === null) {
      Error.push(
        `Wrong password\npassword should have 1 caracter and 1 number and 1 special caracter with 8~16 length`
      );
    }
    if (Error.length) {
      alert(Error.join("\n\n"));
    }
    if (!Error.length) {
      // alert(`${nickname}` + "`s profile changed");
      modifyProfile(nickname, memberEmail, memberPassword);
    }
  }
  return (
    <Main>
      <div className="container">
        <div className="text">내 정보 관리하기</div>
        <div className="boxes">
          <div className="box box1">왼쪽에 이미지 넣어주기</div>
          <form className="box box2" onSubmit={handleSubmit}>
            <div className="inputBox">
              <div className="inputDiv">
                <span>유저 이름</span>
                <input></input>
              </div>
              <div>
                <div className="inputDiv">
                  <span>이메일</span>
                  <input type="email"></input>
                </div>
                <div className="inputDiv">
                  <span>비밀번호</span>
                  <input type="password"></input>
                </div>
              </div>
            </div>
            <div className="buttonBox">
              <button>수정하기</button>
            </div>
          </form>
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
  .container {
    .text {
      font-size: 27px;
      font-weight: bold;
      margin-bottom: 20px;
      padding-bottom: 50px;
      border-bottom: black solid 2px;
    }
  }
  .boxes {
    width: 65vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    margin-top: 70px;
  }
  .box {
    height: 35vh;
    border-radius: 10px;
  }
  .box1 {
    width: 15vw;
  }
  .box2 {
    width: 50vw;
    border-radius: 10px;
    color: black;
    font-size: 17px;
    font-weight: bold;
    background-color: #ebebeb;
  }
  .inputBox {
    margin-top: 50px;
  }
  .inputDiv {
    margin-left: 8vw;
    margin-top: 10px;
    width: 25vw;
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
    font-size: 16px;
    font-weight: 600;
  }
  input:focus {
    outline: none;
  }
  .buttonBox {
    margin-top: 30px;
    width: 46vw;
    display: flex;
    justify-content: end;
    button {
      width: 140px;
      height: 50px;
      background-color: black;
      color: white;
      font-weight: bold;
      font-size: 20px;
      border-radius: 10px;
      border: none;
    }
  }
`;

export default Mypage;
