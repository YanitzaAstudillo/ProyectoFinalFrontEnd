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
             title:'Realizado con éxito!',
             text: 'Se ha registrado satisfactoriamente',
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
            <br />
            <h2>Registro</h2>
            <br />
            <label htmlFor="">Nombre</label><br />
            <input className="redondo"value={nombreUsuario} onChange={nombre} type="text" size="lg" /><br />
            <br />
            <label htmlFor="">Email</label><br />
            <input className="redondo" value={emailUsuario} onChange={email} type="text" size="lg" /><br />
            <br />
            <button id="boton5" type='submit' onClick={enviar}>Enviar</button><br />
            <br />
            <br />
         <div id="col">
            <p>Pagina principal <Link to={"/"}>Home</Link></p>
            </div>
            <div id='co'>
            <p>Ya tienes cuenta? <Link to={"/Login"}>Login</Link></p>
         </div>
            <br />
            <h2>Bienvenidos!</h2>
            <br />
        </div>
    </div>
  )
}

export default FormRegister