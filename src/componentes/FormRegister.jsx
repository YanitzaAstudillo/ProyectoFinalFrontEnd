import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../styles/registro.css'
import llamados from '../services/llamados'

function FormRegister() {
     const [nombreUsuario, SetNombreUsuario]=useState("")
     const [emailUsuario, SetEmailUsuario]=useState("")
     

     function nombre(evento) {
         SetNombreUsuario(evento.target.value)
     }

     function email(evento) {
         SetEmailUsuario(evento.target.value)
     }
     //funcion asyncrona para crear el usuario guardado en el db//
     async function enviar() {
         await llamados.postUsers(nombreUsuario, emailUsuario)
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
     //limpiar los campos despues del registro//
         SetNombreUsuario("")
         SetEmailUsuario("")
    
   }
 
    return (
    
    <div className='datosss'>
        <div className='datos'>
        <h3>Registro</h3>
        <br />
        <label htmlFor="">Nombre</label><br />
        <input className="redondo"value={nombreUsuario} onChange={nombre} type="text" size="lg" /><br />
        <br />
        <label htmlFor="">Email</label><br />
        <input className="redondo" value={emailUsuario} onChange={email} type="text" size="lg" /><br />
        <br />
        <button id="boton5" type='submit' onClick={enviar}>Enviar</button><br />
        <br />
        <div id="col">
        <p>Pagina principal <Link to={"/"}>Home</Link></p>
        </div>
        <br />
        <br />
        <h4>Bienvenidos!</h4>
        </div>
    </div>
  )
}

export default FormRegister