import React from 'react'
import { Link } from 'react-router-dom'

function Privada({children}) {
    function adminValido() {
        const adm=localStorage.getItem("emailAdmin")
        if (adm) {
            return true
        }else{
            return false
        }
    }
  return (
    <div>
        {adminValido() ? children : <div>NO VALIDO <Link to={"/Home"}></Link> </div> }
    </div>
  )
}

export default Privada