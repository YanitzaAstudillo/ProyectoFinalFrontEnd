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

    function cargar() {
        
        mostrarSweet()
    }
//lambda para el evento del sweet//
    const mostrarSweet =() => {
        Swal.fire ({
            title:'Producto Seleccionado',
            text:'Capacidad para 50 peluches, programado para recibir monedas de 100 colones, también acepta billetes',
            icon: 'text',
            confirmButtonText:'Aceptar'
        });
    };

    function cargarDos() {
        
        mostrarSweetDos()
    }
//lambda para el evento del sweet//
    const mostrarSweetDos =() => {
        Swal.fire ({
            title:'Producto Seleccionado',
            text:'Capacidad para 50 peluches, programado para recibir monedas de 100 colones, NO acepta billetes',
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
                    <strong>Nombre Producto</strong>{producto.nombreProducto} <br />
                    <strong>Descripcion Producto</strong>{producto.descripcionProducto} <br />
                    <br />



                </li>
            )
        )}
        </ul>
    </div>

    

    </div>
  )
}

export default Card