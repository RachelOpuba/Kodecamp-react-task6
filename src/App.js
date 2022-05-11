import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Singlecard from "./pages/Singlecard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cards/:id" element={<Singlecard />} />
      </Routes>
    </>
  );
}

export default App;
