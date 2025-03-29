import React, {useState,useEffect} from 'react'
import Swal from "sweetalert2";
import '../styles/galeria.css';
import llamadosProductos from '../services/llamadosProductos';
import { Link } from 'react-router-dom'

function Card() {
    const [productos,SetProductos]=useState([])
    
        useEffect(()=>{
            async function prod() {
                const dato= await llamadosProductos.getProductos()
                SetProductos(dato)
            }
            prod()
        },[])

    function botonn() {
        console.log(productos);
        
        mostrarSweet()
    }
//lambda para el evento del sweet//
    const mostrarSweet =() => {
        Swal.fire ({
            title:'Producto Seleccionado',
            text:'Instalación y mantenimiento sin costo, comisión standard mensual del 25% de ganancias. Contáctanos para solicitar una!',
            icon: 'text',
            confirmButtonText:'Aceptar'
        });
    };

    

  return (
    <div className='azul'>

        <ul className="nav nav-pills">
          <br />
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Asistencia</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/Contacto">Contactenos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>

        <div className='cuadro1'>
        <ul>
            {productos.map((producto,index) => (
                <li key={index}>
                    <br />
                    <strong>Nombre Producto </strong>{producto.nombreProducto} <br />
                    <strong>Descripcion Producto </strong>{producto.descripcionProducto} <br />
                    <br />
                    <img id='imaaa' src={producto.imagenProducto} alt=""  width={"200"}/>
                    <br />
                    <button id="boton6" onClick={botonn}>Mas informacion</button>
                </li>
            )
        )}
        </ul>
    </div>

    

    </div>
  )
}

export default Card