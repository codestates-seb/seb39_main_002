import styled from "styled-components";
import Loginmain from "./Loginmain";
import Main from "./Main";
const MainSum = ({ isLogin }) => {
  return <>{isLogin ? <Loginmain /> : <Main />}</>;
};

export default MainSum;
