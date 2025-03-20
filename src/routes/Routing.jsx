import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Home from '../pages/Home.jsx';
import Register from '../pages/Register.jsx';
import Contacto from '../pages/Contacto.jsx';
import Galeria from '../pages/Galeria.jsx';
import Administrador from '../pages/Administrador.jsx';


function Routing() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/administrador" element={<Administrador />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Routing