import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Menu/menu";
import Home from "./Content/Home/Home";
import About from "./Content/About/About";
import Contact from "./Content/Contact/Contact";

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
