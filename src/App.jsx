import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SoulWhispers from './pages/SoulWhispers';
import GymKey from './pages/GymKey';
import Contact from './pages/Contact';
import FloatingAssistant from './components/FloatingAssistant';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soulwhispers" element={<SoulWhispers />} />
        <Route path="/gymkey" element={<GymKey />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingAssistant />
    </Router>
  );
};

export default App;