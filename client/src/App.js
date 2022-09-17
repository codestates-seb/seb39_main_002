import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/refrigerator" element={<Refrigerator />} />
          <Route path="/colder" element={<Colder />} />
          <Route path="/freezer" element={<Freezer />} />
          <Route path="/fooddetail/:id/colder" element={<Fooddetail />} />
          <Route path="/fooddetail/:id/freezer" element={<Fooddetail />} />
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
