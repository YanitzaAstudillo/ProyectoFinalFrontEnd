import React from 'react'

import { Link } from 'react-router-dom';

import '../styles/footer.css';

function Footer() {
  return (
    <div className='botones'>
        <button id="boton1" size="lg">Demo</button>
        <button id="boton2" size="lg">Galeria de fotos</button>
        <button id="boton3" size="lg">Contacto</button>
     
        <h3>¿Deseas registrarte?<Link to="register" >Registrese aquí</Link> </h3>
    </div>
  )
}

export default Footer