import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Memo from "./Memo";
function Header({ isLogin, setIsLogin, loginHandler, setTokenEmail }) {
  return (
    <>
      <Main>
        <div className="header-container">
          <div>
            <span>
              <Link to="/">Logo</Link>
            </span>
            {/* <button onClick={loginHandler}>setlogin</button> */}
          </div>
          <div className="header-right">
<<<<<<< HEAD
            <span className="modal">
              {isLogin ? (
                <Memo isLogin={isLogin} setIsLogin={setIsLogin} />
              ) : (
                ""
              )}
            </span>
=======
            <span className="modal">{isLogin ? <Memo isLogin={isLogin} setTokenEmail={setTokenEmail} setIsLogin={setIsLogin}/> : ""}</span>
>>>>>>> 13a7ee3839937b1a35e13641872cb808142d7b8c
            <span>
              {isLogin ? (
                <Link to="/mypage">내정보</Link>
              ) : (
                <Link to="/signup">회원가입</Link>
              )}
            </span>
            <span>
              {isLogin ? (
                <Link to="/" onClick={loginHandler}>
                  로그아웃
                </Link>
              ) : (
                <Link to="/login">로그인</Link>
              )}
            </span>
          </div>
        </div>
      </Main>
    </>
  );
}
export const Main = styled.div`
  background-color: black;
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  .header-container {
    width: 100vw;
    padding: 0 30px 0 30px;
    justify-content: space-between;
    display: flex;
  }
  .header-right {
    span {
      padding-left: 50px;
    }
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: #ffffff;
  }
`;

export default Header;
