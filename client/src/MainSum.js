import styled from "styled-components";
import Loginmain from "./Loginmain";
import Main from "./Main";
const MainSum = ({ isLogin, setTokenEmail, recipe }) => {
  return (
    <>
      {isLogin ? (
        <Loginmain setTokenEmail={setTokenEmail} recipe={recipe} />
      ) : (
        <Main recipe={recipe} />
      )}
    </>
  );
};

export default MainSum;
