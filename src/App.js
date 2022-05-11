import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Kodecamp-react-task6" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
