import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
function Header() {
  const [isLogin, setIsLogin] = useState(false); //로그인 상태 구별 true로 바꿀 경우 기존 헤더
  return (
    <>
      <Main>
        <div className="header-container">
          <div>
            <span>
              <Link to="/">Logo</Link>
            </span>
          </div>
          <div className="header-right">
            <span>
              <Link to="/mypage">내정보</Link>
            </span>
            <span>
              <Link to="/">로그아웃</Link>
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
    width: 100%;
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
