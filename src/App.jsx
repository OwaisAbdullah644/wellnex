import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SoulWhispers from './pages/SoulWhispers';
import GymKey from './pages/GymKey';
import Contact from './pages/Contact';
import FloatingAssistant from './components/FloatingAssistant';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import AppLayout from './AppLayout';
import Register from './pages/Register';
import ComingSoon from './pages/ComingSoon';
// import Ribbons from './components/Ribbons';

const App = () => {
  return (
    <Router>
     
        <Routes>
         
         <Route path='/' element={<ComingSoon/>}/>
          
        </Routes>
    </Router>
  );
};

export default App;