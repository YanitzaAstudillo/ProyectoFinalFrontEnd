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
    if (encontrado.rol==="admin") {
      navigate('/administrador')
      return
    }else if (encontrado.rol==="usuario"){
      navigate('/Galeria')
      return
    }else{
      alert("AHHHHH")
      return
    }
    }


  return (
    <div className='looo'>Login
        <br />
      <label htmlFor="">Nombre</label><br />
      <input value={nombreUsuario} onChange={nombre} type="text" /><br />
      <label htmlFor="">email</label><br />
      <input value={emailUsuario} onChange={email} type="text" /><br />
      <br />
      <button onClick={acess}>Iniciar</button>
      <br />
      <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
    </div>
  )
}

export default Login