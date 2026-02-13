import React from "react";
import WheatherApp from "./components/WheatherApp";
import Sidebar from "./components/Sidebar";
import Tempbox from "./components/Tempbox";
import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>

     
    </div>
  );
};

export default App;
