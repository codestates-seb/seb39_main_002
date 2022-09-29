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

function App() {
  const [data, setData] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/data",
      // url: "ec2-3-36-5-78.ap-northeast-2.compute.amazonaws.com:8080",
    }).then(function (response) {
      setData(response.data);
      console.log(response.data);
    });
  }, []);
  function loginHandler() {
    setIsLogin(!isLogin);
  }
  return (
    <BrowserRouter>
      <Header isLogin={isLogin} loginHandler={loginHandler} />
      <div>
        <Routes>
          <Route path="/" element={<MainSum isLogin={isLogin} />} />
          <Route path="/dev" element={<Body />} />
          <Route path="/recipedetail" element={<Recipedetail />} />
          <Route path="/empty" element={<Empty />} />
          <Route path="/main" element={<Main />} />
          <Route path="/loginmain" element={<Loginmain />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find" element={<Find />} />
          <Route
            path="/refrigerator"
            element={<Refrigerator data={data} setData={setData} />}
          />
          <Route
            path="/colder"
            element={<Colder data={data} setData={setData} />}
          />
          <Route
            path="/freezer"
            element={<Freezer data={data} setData={setData} />}
          />
          <Route
            path="/fooddetail/:id/colder"
            element={
              <Fooddetail place={"colder"} data={data} setData={setData} />
            }
          />
          <Route
            path="/fooddetail/:id/freezer"
            element={
              <Fooddetail place={"freezer"} data={data} setData={setData} />
            }
          />
          <Route
            path="/addfood"
            element={<Addfood data={data} setData={setData} />}
          />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/findrecipe" element={<Findrecipe />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
