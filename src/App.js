import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactFormPage from "./components/ContactFormPage";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Header />
      {/* <ChatbotComponent /> ✅ This already contains Chatbot */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactFormPage />} />
        <Route path="/service" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
