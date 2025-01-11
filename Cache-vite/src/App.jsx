import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated imports
import "aos/dist/aos.css"; // Your custom styles
import Carousel from "./Components/Carousel";
import Slider from "./Components/Slider";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={  // This is your homepage, note that it matches the root path
          <>
            <Hero />
            <Slider />
            <Footer />
            <Carousel />
          </>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
