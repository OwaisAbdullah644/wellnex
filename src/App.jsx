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
// import Ribbons from './components/Ribbons';

const App = () => {
  return (
    <Router>
      <div style={{
        position: 'fixed',
        top:0,
        left:0,
        width:'100vw',
        height:'100vh',
        pointerEvents:'none',
        zIndex:0
      }}>
        {/* <Ribbons /> */}
      </div>
      <div style={{ position:'relative', zIndex:1 }}>
        <Routes>
          <Route path='' element={<AppLayout/>}>
                    <Route path="/" element={<Home />} />
          <Route path="/soulwhisper" element={<SoulWhispers />} />
          <Route path="/gymkey" element={<GymKey />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/about' element={<About/>}/>
          </Route>

          <Route path='/register' element={<Register/>}/>
          
        </Routes>
        {/* <FloatingAssistant /> */}
      </div>
    </Router>
  );
};

export default App;