import Loginmain from "./Loginmain";
import Main from "./Main";
const MainSum = ({ tokenEmail, recipe, canMake }) => {
  return (
    <>
      {localStorage.getItem("localToken") ? (
        <Loginmain tokenEmail={tokenEmail} recipe={recipe} canMake={canMake} />
      ) : (
        <Main recipe={recipe} />
      )}
    </>
  );
};

export default MainSum;
