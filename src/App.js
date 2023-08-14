import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/AboutSection";
import Courses from "./Components/Courses";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Courses" element={<Courses/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
