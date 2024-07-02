import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar/Index";
import FactorData from "./Factordata/main/Index";
import "./index.css";
import Signin from "./Signin";
import Mainro from "./rotation/main/Index";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/factor-data" element={<FactorData />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/factor-infor" element={<Mainro />} />
      </Routes>
    </Router>
  );
}

export default App;
