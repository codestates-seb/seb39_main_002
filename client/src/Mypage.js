import styled from "styled-components";
import axios from "axios";
function Mypage({ tokenEmail, setChanged, changed }) {
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
  function modifyProfile(nickname, memberEmail, memberPassword) {
    axios({
      method: "patch",
      url: `http://ec2-3-36-5-78.ap-northeast-2.compute.amazonaws.com:8080/v1/members/${tokenEmail.email}`,
      headers: {
        Authorization: tokenEmail.token,
      },
      data: {
        email: tokenEmail.email,
        nickname: nickname,
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          setChanged(!changed);
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
    if (tokenEmail.email !== memberEmail) {
      Error.push(`Wrong email\nemail does not match`);
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
          <div className="box box1">
            <div className="imgBox">
              <img src={process.env.PUBLIC_URL + `/logo192.png`}></img>
            </div>
            <h1>{tokenEmail.nickname ? tokenEmail.nickname : "Jay"}</h1>
          </div>
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
    .imgBox {
      display: flex;
      justify-content: center;
    }
    img {
      width: 150px;
    }
    h1 {
      display: flex;
      justify-content: center;
      margin: 0;
    }
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
    width: 40vw;
    display: flex;
    span {
      font-size: 20px;
      font-weight: bold;
      display: flex;
      align-items: center;
      width: 80px;
      margin-right: 20px;
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
