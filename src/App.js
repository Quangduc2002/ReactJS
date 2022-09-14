import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./component/Menu/menu";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import GlobalStyles from "./component/GlobalStyles";

function App() {
  return (
    <GlobalStyles>
      <div className="main">
        <Menu />

        {/* chuyển tabs */}
        <Routes>
          {/* path="*" sẽ hoạt động như một công cụ bắt tất cả cho bất kỳ URL không xác định nào */}
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </GlobalStyles>
  );
}

export default App;
