import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
// import { Link } from "react-router-dom";

function Login({ isLogin, setIsLogin, setTokenEmail }) {
  const [isChecked, setisChecked] = useState(false);
  const idRegEx = /^[A-Za-z]{1}[A-Za-z0-9_-]{3,11}$/;
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  function checkHandler() {
    setisChecked(!isChecked);
  }

  // function linkToMain() {
  //   window.location.href = `http://localhost:3000/loginmain`;
  // }
  function goHome() {
    window.history.pushState("", "", "http://localhost:3000/");
    window.history.pushState("", "", "http://localhost:3000/");
    window.history.back();
  }

  function postForm(username, password) {
    axios
      // .post("http://15.164.53.160:8080/v1/members/login", {
      .post(
        "http://ec2-3-36-5-78.ap-northeast-2.compute.amazonaws.com:8080/v1/members/login",
        {
          username,
          password,
        }
      )
      .then(function (response) {
        // console.log(response.headers.authorization);
        if (response.status === 200) {
          localStorage.setItem("localToken", response.headers.authorization);
          localStorage.setItem("email", username);
          setIsLogin(!isLogin);
          setTokenEmail({
            token: response.headers.authorization,
            email: username,
            nickname: "server",
          });
          goHome();
          // username,token 두개 저장해라
          // console.log(response);
          // linkToMain();
        }
      })
      .catch(function (error) {
        // linkToMain(); //에러로 인해 이동 되는지 테스트 하는 용도
        console.log(error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const memberId = event.target[0].value;
    // const email = event.target[0].value;
    const memberPassword = event.target[1].value;
    let Error = [];
    // if (memberId.match(idRegEx) === null) {
    //   Error.push(
    //     `Wrong ID : ${memberId}\nID should Start with caracter and 4~12 length`
    //   );
    // }
    if (memberPassword.match(passwordRegEx) === null) {
      Error.push(
        `Wrong password\npassword should have 1 caracter and 1 number and 1 special caracter with 8~16 length`
      );
    }
    if (Error.length) {
      alert(Error.join("\n\n"));
    }
    if (!Error.length) {
      //   linkToLogin(); // 아래 작업이 되어야 하지만 일단 post가 안되는 상황이라 로그인 이동만 체크
      postForm(memberId, memberPassword);
    }
  };

  return (
    <Main check={isChecked}>
      <div className="content">
        <div className="conten-body">
          <div className="content-right">
            <div className="form" onSubmit={handleSubmit}>
              <form>
                <div>
                  <label className="input-text">Email</label>
                  <div>
                    <input type="text" id="display-name" name="display-name" />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="input-text">Password</label>
                  </div>
                  <div>
                    <input type="password" id="password" name="password" />
                  </div>
                </div>
                <div className="keep-login">
                  <button type="button" onClick={checkHandler}>
                    {isChecked ? "v" : ""}
                  </button>
                  <span>로그인 유지하기</span>
                </div>
                <div>
                  <button type="submit" className="button-sign">
                    로그인
                  </button>
                </div>
              </form>
            </div>
            <div className="buttons">
              <button className="button-top top-google">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                    fill="#EA4335"
                  ></path>
                </svg>{" "}
                <span className="marginUp">Sign up with Google </span>
              </button>
              <button className="button-top top-github">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z"
                    fill="white"
                  ></path>
                </svg>{" "}
                <span className="marginUp">Sign up with GitHub </span>
              </button>
              <button className="button-top top-facebook">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"
                    fill="white"
                  ></path>
                </svg>{" "}
                <span className="marginUp">Sign up with Facebook</span>
              </button>
            </div>
            <div className="links">
              <div>
                아직 회원이 아니신가요? -{" "}
                <Link to="/signup">회원가입 하러가기</Link>
              </div>
              <div>
                아이디 비밀번호를 잊으셨나요? -{" "}
                <Link to="/find">찾으러가기</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
export const Main = styled.div`
  overflow-x: hidden;
  input {
    border-radius: 8px;
  }
  .conten-body {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .marginUp {
    vertical-align: 4px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    border-top: 1px solid #bbbbbb;
  }

  .top-google {
    font-size: 13px;
    line-height: 15px;
    text-decoration: none solid rgb(35, 38, 41);
    background-color: white;
    color: #232629;
    height: 37px;
    width: 316px;
    border: 1px solid #d6d9dc;
    margin: 0px 0 4px 0;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
  }

  .top-github {
    font-size: 13px;
    line-height: 15px;
    text-decoration: none solid rgb(255, 255, 255);
    text-align: center;
    background-color: #2f3337;
    color: #ffffff;
    height: 37px;
    width: 315px;
    border: 1px solid #d6d9dc;
    margin: 4px 0 4px 0;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
  }
  .top-facebook {
    font-size: 13px;
    line-height: 15px;
    text-decoration: none solid rgb(255, 255, 255);
    text-align: center;
    background-color: #385496;
    color: #ffffff;
    height: 37px;
    width: 315px;
    border: 1px solid #ffffff;
    margin: 4px 0 4px 0;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
  }

  .form {
    background-color: #ffffff;
    background-position: 0% 0%;
    color: #232629;
    width: 268px;
    margin: 20px 0 24px 0;
    padding: 24px 24px 24px 24px;
    max-width: 316px;
    display: block;
    border-radius: 8px;
    border: 1px solid #dfe0e1;
  }

  .input-text {
    font-size: 15px;
    font-weight: 600;
    line-height: 19px;
    text-decoration: none solid rgb(12, 13, 14);
    text-align: left;
    word-spacing: 0px;
    height: 19px;
    width: 268px;
    margin: 2px 0 2px 0;
    padding: 0 2px 0 2px;
  }

  input {
    font-size: 13px;
    text-decoration: none solid rgb(12, 13, 14);
    color: #0c0d0e;
    height: 28px;
    width: 268px;
    border: 1px solid #babfc4;
    margin: 5px 0 5px 0;
    cursor: text;
  }

  .button-sign {
    width: 268px;
    height: 48px;
    padding: 10.4px;
    margin: 16px 2px 22px 2px;
    background-color: black;
    color: #ffffff;
    border-radius: 10px;
    border: none;
    font-size: 18px;
  }
  .keep-login {
    font-size: 12px;
    span {
      margin-left: 3px;
      ${(props) =>
        props.check
          ? "vertical-align: -1.5px;"
          : "vertical-align: 2.5px;"}/* vertical-align: 3px; */
    }
    button {
      width: 21px;
      height: 21px;
      border: #777777 solid 1px;
      background-color: #ebebeb;
      border-radius: 50%;
    }
  }
  .links {
    margin-top: 10px;
    color: #969696;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      text-decoration: none;
    }
    a:visited {
      color: black;
    }
  }
`;

export default Login;
