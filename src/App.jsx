import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Routes>
        <Route path="/">
          <Route index element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
