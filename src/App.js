import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactFormPage from './components/ContactFormPage';  // Ensure these are exported correctly
import About from './components/About';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Header />
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
