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
  }


  return (
    <div className='looo'>
    <div id="lg">
      <h3>Login</h3>
      <label htmlFor="">Nombre</label><br />
      <input className="red" value={nombreUsuario} onChange={nombre} type="text" /><br />
      <br />
      <label htmlFor="">Email</label><br />
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