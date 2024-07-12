import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Index";
import FactorData from "./Factordata/main/Index";
import Homein from "./Factorin/main";
import "./index.css";
import Login from "./Login";
import Mainro from "./rotation/main/Index";
import Mainra from "./Rank/main";
import SignUp from "./signup";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factor-data" element={<FactorData />} />
        <Route path="/factor-invest" element={<Homein />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-in" element={<SignUp />} />
        <Route path="/factor-infor" element={<Mainro />} />
        <Route path="/factor-ranking" element={<Mainra />} />
      </Routes>
    </Router>
  );
}

export default App;
