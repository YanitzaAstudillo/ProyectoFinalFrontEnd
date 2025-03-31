import React from 'react'
import '../styles/demostrar.css';


function DemoVideo() {
  return (
    <div className='presentacion'>
      <video id= "vid" width="400" height={"550"}controls>
        <source src="../src/assets/video.mp4" type="video/mp4" />
      </video>
      
      <div id="parrafos">
      <h2>Demo Balanzas</h2>
      <h4>Última Generación</h4>
        <p>Las balanzas pantalla táctil ofrecen la oportunidad de proyectar imagenes y videos para la publicidad de su empresa</p>
        <p>Miden peso y altura, composición corporal o grasa corporal y tejido muscular, índice de masa corporal o nivel de grasa según peso altura y edad, presión arterial, nivel de oxigeno, temperaura, nivel de glucosa en la sangre, nivel de ácido urico, medición de ritmo cardíaco</p>
        <img id="vid" src="../src/assets/producto5.jpeg" alt="foto5" className="image" width={"190"} />
      </div>

        <div className='cuadro7'>
          <h2>Maquina de Garra</h2>
            <p>Cuenta con luces LED y Sonido, modelo llamativo y novedoso para su empresa, cuenta con billetera y monedero para mayor accesibilidad al momento de su uso</p>
            <p>Dinámico tableto con luces de colores, capacidad para 50 peluches ó más peluches dependiendo de su tamaño</p>
            <img id="vid" src="../src/assets/producto6.jpeg" alt="foto6" className="image" width={"190"} />
        </div>
      <br />
      <div>
      <video id= "vid" width="330" height={"550"}controls>
        <source src="../src/assets/videoDos.mp4" type="video/mp4" />
      </video>
      </div>

    <div id='navi'>
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
        </ul>
    </div>

    </div>
  )
}

export default DemoVideo