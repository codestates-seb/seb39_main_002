import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Body from "./Body";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/1" element={<Signup />} />
          {/* <Route path="/2" element={<Login />} /> */}
          {/* <Route path="/3" element={<CreateQuestion />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
