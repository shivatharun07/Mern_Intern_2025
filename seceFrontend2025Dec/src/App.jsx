import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/functionalCompnents/Navbar";
import Home from "./components/functionalCompnents/Home";
import About from "./components/functionalCompnents/About";
import "./css/App.css";
import LearningReact from "./components/functionalCompnents/LearningReact";
import Contact from "./components/functionalCompnents/Contact";
import Login from "./components/functionalCompnents/Login";
import Signup from "./components/functionalCompnents/Signup";
import UseState from "./components/functionalCompnents/Hooks/UseState";
import UseEffect from "./components/functionalCompnents/Hooks/UseEffect";
import UseEffectAPI from "./components/functionalCompnents/Hooks/UseEffectAPI";
import UseRef from "./components/functionalCompnents/Hooks/UseRef";
import UseMemo from "./components/functionalCompnents/Hooks/UseMemo";
import UseCallback from "./components/functionalCompnents/Hooks/UseCallback";
function App() {
  return (
    <header>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/use-state" element={<UseState />}/>
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-effect-api" element={<UseEffectAPI />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-callback" element={<UseCallback />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </header>
  );
}

export default App;
