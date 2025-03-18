import React from 'react'

import { Link,useNavigate } from 'react-router-dom';

import '../styles/footer.css';


function Footer() {
    const navigate = useNavigate()
  return (
    <div className='fon'>
        <div className='botones'>
        <button id="boton1" size="lg">Demo</button>
       <Link to={""}> <button id="boton2" size="lg">Galeria de fotos</button></Link>
        <button id="boton3" onClick={()=>{navigate("/Contacto")}} size="lg">Contacto</button>
     
        <h3>¿Deseas registrarte?<Link to="register" >Registrese aquí</Link> </h3>
    </div>
    </div>
    
  )
}

export default Footer