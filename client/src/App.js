import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Body from "./Body";
import Header from "./Header";
import Login from "./Login";
import Find from "./Find";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/main" element={"login-main"} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find" element={<Find />} />
          <Route path="/refrigerator" element={"refrigerator"} />
          <Route path="/colder" element={"colder"} />
          <Route path="/freezer" element={"freezer"} />
          <Route path="/fooddetail" element={"fooddetail"} />
          <Route path="/addfood" element={"addfood"} />
          <Route path="/mypage" element={"mypage"} />
          <Route path="/findrecipe" element={"findrecipe"} />
          <Route path="/recommendation" element={"recommendation"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
