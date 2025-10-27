import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';

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