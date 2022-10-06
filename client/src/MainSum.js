import styled from "styled-components";
import Loginmain from "./Loginmain";
import Main from "./Main";
const MainSum = ({ isLogin, tokenEmail, recipe, canMake }) => {
  return (
    <>
      {isLogin ? (
        <Loginmain tokenEmail={tokenEmail} recipe={recipe} canMake={canMake} />
      ) : (
        <Main recipe={recipe} />
      )}
    </>
  );
};

export default MainSum;
