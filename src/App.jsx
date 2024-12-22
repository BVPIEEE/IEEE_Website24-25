import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/predictor" element={<Calculator />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/docs" element={<FinTrackDocumentation />} />
          <Route path="/tracking" element={<FinancialPlanning />} />
          <Route path="/trading" element={<NiftyETFTrading />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
