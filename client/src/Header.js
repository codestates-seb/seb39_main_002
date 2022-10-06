import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Memo from "./Memo";
import logo from "./img/logo.png"

function Header({ isLogin, setIsLogin, loginHandler, setTokenEmail }) {
  return (
    <>
      <Main>
        <div className="header-container">
          <div>
            <span>
              <Link to="/">
                <Img src={logo} alt="logo" />
              </Link>
            </span>
            {/* <button onClick={loginHandler}>setlogin</button> */}
          </div>
          <div className="header-right">
            <span className="modal">
              {isLogin ? (
                <Memo
                  isLogin={isLogin}
                  setTokenEmail={setTokenEmail}
                  setIsLogin={setIsLogin}
                />
              ) : (
                ""
              )}
            </span>
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
    padding: 15px 30px 0 30px;
    justify-content: space-between;
    display: flex;
  }
  .header-right {
     padding-top: 4px;
    span {
      padding-left: 50px;      
    }
  }
  a {
    text-decoration: none;
  }
  a:link {
    color: #ffffff;
  }
  a:visited {
    color: #ffffff;
  }
`;

export const Img = styled.img`
 width: 120px;
`

export default Header;
