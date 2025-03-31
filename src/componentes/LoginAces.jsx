import { useEffect, useState } from 'react';

import {Link, useNavigate} from "react-router-dom";
import llamados from '../services/llamados';
import '../styles/log.css';

function Login() {

    const [nombreUsuario, SetNombreUsuario]=useState("")
    const [emailUsuario, SetEmailUsuario]=useState("")
    const [usuarios, SetUsuarios]=useState([])

    const navigate = useNavigate()

    useEffect(() => {
  
      async function fetchDataUsers() {
  
        const dataaa = await llamados.getUsers()
        
        SetUsuarios(dataaa)
        
      };
  
      fetchDataUsers();
  
    }, []); 

    function nombre(evento) {

      SetNombreUsuario(evento.target.value)
      
    }
  
    function email(evento) {
  
      SetEmailUsuario(evento.target.value)
      
    }
    function acess() {
      const encontrado = usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario && usuario.emailUsuario === emailUsuario)
      if (encontrado){
        if (encontrado.rol === "admin") {
            navigate('/Administrador');
        } else if (encontrado.rol === "usuario") {
            navigate('/Galeria');
        } 
      } else {
        alert("Usuario no encontrado");
    }
    localStorage.setItem("emailAdmin", "admin");
  }


  return (
    <div className='looo'>

<ul className="nav nav-pills">
          
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/galeria">Galeria</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/Contacto">Contactenos</a>
          </li>
          <li className="nav-item">
          <a className="nav-link " href="/Demo">Demo</a>
          </li>
        </ul>

    <div id="lg">
      <h3>Login</h3>
      <label htmlFor="">Nombre</label>
      <input className="red" value={nombreUsuario} onChange={nombre} type="text" /><br />
      <br />
      <label htmlFor="">Email</label>
      <input className="red" value={emailUsuario} onChange={email} type="text" /><br />
      <br />
      <button id= "boton8" onClick={acess}>Iniciar</button>
      <br />
      <br />
      <br />
      <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>

    </div>
      
    </div>
  )
}

export default Login