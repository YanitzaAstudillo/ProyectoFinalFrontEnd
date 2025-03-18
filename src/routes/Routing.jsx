import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Home from '../pages/Home.jsx';
import Register from '../pages/Register.jsx';
import Contacto from '../pages/Contacto.jsx';


function Routing() {


  return (
    <div>
      <Router>
        <Routes>
      
                        

                            <Route path="/" element={<Home/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/contacto" element={<Contacto/>}/>

                      
                            
        </Routes>
      </Router>
    </div>
  );
}
export default Routing