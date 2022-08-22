import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./component/menu";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="main">
      <Menu />

      {/* chuyển tabs */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
