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

      <Home />

      {/* chuyển tabs */}
      <Routes>
        {/* path="*" sẽ hoạt động như một công cụ bắt tất cả cho bất kỳ URL không xác định nào */}
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
