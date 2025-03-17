import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import llamados from '../services/llamados'

import Swal from 'sweetAlert2'
//COMENTARIO
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
        llamados.PostUsers(nombreUsuario, emailUsuario)
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
    };

  return (
    <div>
        <br />
        <label htmlFor="">Nombre</label><br />
        <input value={nombreUsuario} onChange={nombre} type="text" /><br />
        <label htmlFor="">Email</label><br />
        <input value={emailUsuario} onChange={email} type="text" /><br />
        <button onClick={enviar}>Enviar</button>
        <p>Pagina principal <Link to="/Principal">Home</Link></p>
    </div>
  )
}

export default FormRegister