import React, { useEffect, useState } from 'react'
import llamadosProductos from '../services/llamadosProductos.jsx';
import Swal from 'sweetalert2';
import '../styles/ad.css';
import llamados from '../services/llamados.jsx';


//funcion asyncrona para la obtencion de datos mediante el get de llamadosProductos, uso del useEffect//
function Admin() {

//hooks para las funcionalidades//
    const [productos,SetProductos]=useState([])
    const [nombreProducto, SetNombreProducto]=useState()
    const [descripcionProducto, SetDescripcionProducto]=useState()
    const [imagenProducto, SetImagenProducto]=useState()
    const [nombreProductoE,SetNombreProductoE] = useState("")
    const [descripcionProductoE, SetDescripcionProductoE] = useState("")

    useEffect(()=>{
        async function prod() {
            const dato= await llamadosProductos.getProductos()
            SetProductos(dato)
        }
        prod()
    },[])

    function nombre(evento) {
        SetNombreProducto(evento.target.value)
    }

    function descripcion(evento) {
        SetDescripcionProducto(evento.target.value)
    }

    
        //se hace un proceso de conversion de la imagen//
        function subirImagen(evento){
            const archivo = evento.target.files[0]
            if (archivo){
                const lector = new FileReader()
                lector.onloadend = ()=>{
                    SetImagenProducto(lector.result)
                }
                lector.readAsDataURL(archivo)
            }
            SetImagenProducto(evento.target.value)                                                                          
        }
    
// funcion agregar con el post del llamadoProducto para crear nuevos productos//
    function agregar() {
        console.log(imagenProducto);
        
        console.log(nombreProducto,descripcionProducto);
        llamadosProductos.postProductos(nombreProducto,descripcionProducto,imagenProducto)
    }

// funcion editar con el update del llamadoProducto//
function editar(id) {
    
    llamadosProductos.updateProductos(nombreProductoE,descripcionProductoE,id)
    edit()
}
const edit=() =>{
    Swal.fire({
        title:'Editar producto',
        text: 'Desea editar?',
        icon: 'question',
        confirmButtonText: 'Aceptar'
    });
    SetNombreProductoE("")
    SetDescripcionProductoE("")
};

//funcion eliminar Producto jalando el id para su funcionalidad//
function eliminar(id) {
    console.log(id);
    
    llamadosProductos.deleteProductos(id)
    elimin()
}
const elimin =() =>{
    Swal.fire({
        title:'Eliminar producto',
        text: 'Desea eliminar?',
        icon: 'question',
        confirmButtonText: 'Aceptar'
    });
    //Funcion eliminar Usuario con sweetalert//
    function elimn(id) {
                llamados.deleteUser(id)
                eliii()
            }
        const eliii=() =>{
            Swal.fire({
                title:'Eliminar usuario',
                text: 'Desea eliminar?',
                icon: 'question',
                confirmButtonText: 'Aceptar'
            });
        }

}

//onChange para controlar los inputs (nombre, descripcion, imag)
// Mapeo de cada elemento creando uno nuevo segun su funcion dada//
  return (
    <div className='add'>
        <h2>CRUD PRODUCTOS</h2>
        <br />
        <label htmlFor="">Nombre Producto</label>
        <input onChange={nombre} value={nombreProducto} type="text" /> <br />
        <br />
        <label htmlFor="">Descripcion producto</label>
        <input onChange={descripcion} value={descripcionProducto} type="text" /> <br />
        <br />
        <label htmlFor="">Imagen Producto</label>
        <input onChange={subirImagen} type="file" />
        <br />
        <br />
        <button onClick={agregar}>Agregar</button>
        <br />
        <ul>
            {productos.map((producto,index) => (
                <li key={index}>
                    <br />
                    <strong>Nombre Producto</strong>{producto.nombreProducto} <br />
                    <strong>Descripcion Producto</strong>{producto.descripcionProducto} <br />
                    <br />
                    <img src={producto.imagenProducto} alt="" width={"170"} />
                    <br />
                    <input onChange={evento=>SetProductos(evento.target.value) } /> <br />
                    <br />
                    <input onChange={subirImagen} accept='image/*' type="file" />
                    <br />
                    <br />
                    <input onChange= {evento=> SetNombreProductoE(evento.target.value)} type="text"  /> Nombre<br />
                    <br />
                    <input onChange= {evento=> SetDescripcionProductoE(evento.target.value)} type="text"  /> Descripcion<br />
                    <button onClick={()=>editar(producto.id)}>Confirmar edición</button> <br />
                    <button onClick={()=>eliminar(producto.id)} >Eliminar</button> <br />
                </li>
            )
        )}
        </ul>
        <div>
        <h2>CRUD USUARIOS</h2>
        <br />
        {usuarios.map((usuario, index)=> (
            <li key={index}>
                <br />
                <button onClick={()=>elimn(usuario.id)} >Eliminar</button> <br />
            </li>
        )
        )}

        </div>


    </div>
  )
}

export default Admin