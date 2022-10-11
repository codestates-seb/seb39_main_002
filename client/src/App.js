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
  const [canMake, setCanMake] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("localToken")) {
      return;
    }
    axios({
      method: "get",
      url: `https://factory-kms.com/v1/foods/${localStorage.getItem("email")}`,
      headers: {
        Authorization: localStorage.getItem("localToken"),
      },
    }).then(function (response) {
      setData(response.data.data);
    });
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
  }, []);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://openapi.foodsafetykorea.go.kr/api/66d2d9b6ae214ef8afb7/COOKRCP01/json/1/1000`,
    }).then(function (response) {
      setRecipe(response.data.COOKRCP01.row);
    });
  }, []);
  useEffect(() => {
    if (data && data.length > 0 && recipe.length > 10) {
      let arr = [];
      let recipes = recipe.map((el, index) => [
        index,
        el.RCP_NM,
        el.ATT_FILE_NO_MK,
      ]);
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < recipes.length; j++) {
          if (recipes[j][1].indexOf(data[i].foodName) !== -1) {
            arr.push(recipes[j]);
          }
        }
      }
      let result = [...new Set(arr)];
      setCanMake(
        result.filter(
          (el) =>
            el[2].slice(-3) === "png" ||
            el[2].slice(-3) === "jpg" ||
            el[2].slice(-3) === "PNG" ||
            el[2].slice(-3) === "JPG"
        )
      );
    }
  }, [recipe, data]);

  function loginHandler() {
    if (localStorage.getItem("localToken")) {
      localStorage.removeItem("localToken");
      localStorage.removeItem("email");
    } else {
    }
  }

  return (
    <BrowserRouter>
      <Header setTokenEmail={setTokenEmail} loginHandler={loginHandler} />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <MainSum
                tokenEmail={tokenEmail}
                recipe={recipe}
                canMake={canMake}
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
            element={<Login setTokenEmail={setTokenEmail} />}
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
            element={
              <Recommendation tokenEmail={tokenEmail} canMake={canMake} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
