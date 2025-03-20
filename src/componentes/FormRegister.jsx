import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import llamados from '../services/llamadosProductos.jsx'

import Swal from 'sweetalert2';

import '../styles/registro.css';

function FormRegister() {

    const [nombreUsuario, SetNombreUsuario]=useState()
    const [emailUsuario, SetEmailUsuario]=useState()

    function nombre(evento) {
        SetNombreUsuario(evento.target.value)
    }

    function email(evento) {
        SetEmailUsuario(evento.target.value)
    }

    function enviar() {
        llamados.postUsers(nombreUsuario, emailUsuario)
        mostrarVentana()
    }
    //sweetAlert
    const mostrarVentana = () => {
        Swal.fire ({
            title:'Exito!',
            text: 'Realizado',
            icon:'Success',
            confirmButtonText: 'Aceptar'
        });
        
        SetNombreUsuario("")
        SetEmailUsuario("")
    };

  return (
    <div className='datos'>
        <h3>Registro</h3>
        <br />
        <label htmlFor="">Nombre</label><br />
        <input className= "redondo"value={nombreUsuario} onChange={nombre} type="text" /><br />
        <br />
        <label htmlFor="">Email</label><br />
        <input className= "redondo" value={emailUsuario} onChange={email} type="text" /><br />
        <br />
        <button id="boton5" type='submit' onClick={enviar}>Enviar</button><br />
        <br />
        <div id="col">
        <p>Pagina principal <Link to="/">Home</Link></p>
        </div>
        
    </div>
  )
}

export default FormRegister