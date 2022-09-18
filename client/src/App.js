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
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/data",
    }).then(function (response) {
      setData(response.data);
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/main" element={<Loginmain />} />
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
            element={<Fooddetail place={"colder"} />}
          />
          <Route
            path="/fooddetail/:id/freezer"
            element={<Fooddetail place={"freezer"} />}
          />
          <Route path="/addfood" element={<Addfood />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/findrecipe" element={<Findrecipe />} />
          <Route path="/recommendation" element={<Recommendation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
