import React from 'react'

import { Link,useNavigate } from 'react-router-dom';

import '../styles/footer.css';


function Footer() {
    const navigate = useNavigate()
  return (
    <div className='fon'>
        <div className='botones'>
        <Link to={"/Demo"}> <button id="boton1" >Demo productos Top</button></Link>
        <Link to={"/Galeria"}> <button id="boton1" >Galeria de fotos</button></Link>
        
        <button id="boton1" onClick={()=>{navigate("/Contacto")}} size="lg">Contacto</button>
        <h3>¿Deseas registrarte?<Link to="register" >Registrese aquí</Link> </h3>
    </div>
    </div>
    
  )
}

export default Footer