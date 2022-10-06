import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Signup from "./Signup";
import Body from "./Body";
import Header from "./Header";
import Login from "./Login";
import Find from "./Find";
import Refrigerator from "./Refrigerator";
import Colder from "./Colder";
import Freezer from "./Freezer";
import Fooddetail from "./Fooddetail";
import Addfood from "./Addfood";
import Mypage from "./Mypage";
import Recommendation from "./Recommendation";
import MainSum from "./MainSum";
import Empty from "./components/Empty";
import Recipedetail from "./Recipedetail";

function App() {
  const [data, setData] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [tokenEmail, setTokenEmail] = useState({
    token: "",
    email: "",
    nickname: "",
  });
  const [changed, setChanged] = useState(false);
  const [recipe, setRecipe] = useState([
    {
      RCP_NM: "",
      ATT_FILE_NO_MK: "",
      RCP_PARTS_DTLS: "",
      MANUAL01: "",
      MANUAL_IMG01: "",
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("localToken")) {
      axios({
        method: "get",
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
      setIsLogin(true);
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
    if (localStorage.getItem("localToken")) {
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
      axios({
        method: "get",
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
    }
  }, [isLogin]);
  useEffect(() => {
    //recipe 받아오기
    axios({
      method: "get",
      url: `https://openapi.foodsafetykorea.go.kr/api/66d2d9b6ae214ef8afb7/COOKRCP01/json/1/1000`,
    }).then(function (response) {
      console.log(response.data.COOKRCP01.row);
      setRecipe(response.data.COOKRCP01.row);
    });
  }, []);

  function loginHandler() {
    if (isLogin) {
      localStorage.removeItem("localToken");
      localStorage.removeItem("email");
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
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
          <Route
            path="/"
            element={
              <MainSum
                isLogin={isLogin}
                setTokenEmail={setTokenEmail}
                recipe={recipe}
              />
            }
          />
          <Route path="/dev" element={<Body />} />
          <Route
            path="/recipedetail/:id"
            element={<Recipedetail recipe={recipe} />}
          />
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
