import React from 'react'
import  ContactoUs  from '../componentes/ContactoUs'
import Historia from '../componentes/Historia'
import "../styles/contacto.css"

function Contacto() {
  return (
    <div className='todoContacto'>

        <ContactoUs/>
        <Historia/>
    </div>
  )
}

export default Contacto