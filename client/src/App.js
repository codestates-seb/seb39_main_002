import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Signup from "./Signup";
import Body from "./Body";
import Header from "./Header";
import Login from "./Login";
import Find from "./Find";
import Loginmain from "./Loginmain";
import Refrigerator from "./Refrigerator";
import Colder from "./Colder";
import Freezer from "./Freezer";
import Fooddetail from "./Fooddetail";
import Addfood from "./Addfood";
import Mypage from "./Mypage";
import Findrecipe from "./Findrecipe";
import Recommendation from "./Recommendation";
import Main from "./Main";
import MainSum from "./MainSum";
import Empty from "./components/Empty";
import Recipedetail from "./Recipedetail";
import Memo from "./Memo";

function App() {
  const [data, setData] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [tokenEmail, setTokenEmail] = useState({
    token: "",
    email: "",
    nickname: "",
  });
  const [changed, setChanged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("localToken")) {
      setIsLogin(true);
      axios({
        method: "get",
        // url: "http://localhost:3001/data",
        // https://factory-kms.com
        url: `https://factory-kms.com/v1/members/${localStorage.getItem(
          "email"
        )}`,
        headers: {
          Authorization: localStorage.getItem("localToken"),
        },
      }).then(function (response) {
        setTokenEmail({
          token: localStorage.getItem("localToken"),
          email: response.data.data.email,
          nickname: response.data.data.nickname,
        });
      });
      axios({
        method: "get",
        url: `https://factory-kms.com/v1/foods/${localStorage.getItem(
          "email"
        )}`,
        headers: {
          Authorization: localStorage.getItem("localToken"),
        },
      }).then(function (response) {
        setData(response.data.data);
      });
    }
  }, [changed]);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://factory-kms.com/v1/foods/${localStorage.getItem("email")}`,
      headers: {
        Authorization: localStorage.getItem("localToken"),
      },
    }).then(function (response) {
      setData(response.data.data);
    });
  }, [isLogin]);
  function loginHandler() {
    if (isLogin) {
      localStorage.removeItem("localToken");
      localStorage.removeItem("email");
    }
    setIsLogin(!isLogin);
  }
  return (
    <BrowserRouter>
      <Header
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setTokenEmail={setTokenEmail}
        loginHandler={loginHandler}
      />
      <div>
        <Routes>
          <Route path="/" element={<MainSum isLogin={isLogin} />} />
          <Route path="/dev" element={<Body />} />
          <Route path="/recipedetail" element={<Recipedetail />} />
          <Route path="/empty" element={<Empty />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={
              <Login
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setTokenEmail={setTokenEmail}
              />
            }
          />
          <Route path="/find" element={<Find />} />
          <Route
            path="/refrigerator"
            element={
              <Refrigerator
                data={data}
                setData={setData}
                tokenEmail={tokenEmail}
              />
            }
          />
          <Route
            path="/colder"
            element={
              <Colder data={data} setData={setData} tokenEmail={tokenEmail} />
            }
          />
          <Route
            path="/freezer"
            element={
              <Freezer data={data} setData={setData} tokenEmail={tokenEmail} />
            }
          />
          <Route
            path="/fooddetail/:id"
            element={
              <Fooddetail
                data={data}
                setData={setData}
                tokenEmail={tokenEmail}
                setChanged={setChanged}
                changed={changed}
              />
            }
          />
          <Route
            path="/addfood"
            element={
              <Addfood
                data={data}
                setData={setData}
                tokenEmail={tokenEmail}
                setChanged={setChanged}
                changed={changed}
              />
            }
          />
          <Route
            path="/mypage"
            element={
              <Mypage
                tokenEmail={tokenEmail}
                setChanged={setChanged}
                changed={changed}
              />
            }
          />
          <Route path="/findrecipe" element={<Findrecipe />} />
          <Route
            path="/recommendation"
            element={<Recommendation tokenEmail={tokenEmail} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
