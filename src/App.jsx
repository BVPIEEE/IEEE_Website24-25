import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Communities from "./pages/Communities";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";
import Team from "./pages/Team";
import About from "./pages/About";
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
