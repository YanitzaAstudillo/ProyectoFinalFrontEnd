import React, {useState,useEffect} from 'react'
import Swal from "sweetalert2";
import '../styles/galeria.css';
import llamadosProductos from '../services/llamadosProductos';

import { Link } from 'react-router-dom'

//funcion asyncrona para la obtencion de lectura de los productos del llamadosProductos//
function Card() {
    const [productos,SetProductos]=useState([])
    
        useEffect(()=>{
            async function prod() {
                const dato= await llamadosProductos.getProductos()
                SetProductos(dato)
            }
            prod()
        },[])
    //funcion del boton que muestra una alerta con la descripcion ADICIONAL del producto//
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

    //navbar de pags secundarias y mapeo que obtiene la lectura de productos agregados en el Admin

  return (
    <div className='azul'>

        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/register">Registro</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/Contacto">Contactenos</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/Demo">Demo</a>
            </li>
        </ul>

        <br />
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