import React, {useState,useEffect} from 'react'

import Swal from "sweetalert2";

import '../styles/galeria.css';

import llamadosProductos from '../services/llamadosProductos';


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
            text:'Instalación y mantenimiento sin costo, comisión standard mensual del 25% de ganancias',
            icon: 'text',
            confirmButtonText:'Aceptar'
        });
    };

    

  return (
    <div>
        <div className='cuadro1'>
        <ul>
            {productos.map((producto,index) => (
                <li key={index}>
                    <br />
                    <strong>Nombre Producto </strong>{producto.nombreProducto} <br />
                    <strong>Descripcion Producto </strong>{producto.descripcionProducto} <br />
                    <br />
                    <img id='imaaa' src={producto.imagenProducto} alt=""  width={"190"}/>
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