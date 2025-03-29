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
      <br />
        <p>Las balanzas pantalla táctil ofrecen la oportunidad de proyectar imagenes y videos para la publicidad de su empresa</p>
        <p>Miden peso y altura, composición corporal o grasa corporal y tejido muscular, índice de masa corporal o nivel de grasa según peso altura y edad, presión arterial, nivel de oxigeno, temperaura, nivel de glucosa en la sangre, nivel de ácido urico, medición de ritmo cardíaco</p>
      </div>

      <div className='cuadro7'>
        <img id="vid" src="../src/assets/producto5.jpeg" alt="foto5" className="image" width={"190"} />
        
        <ul className="nav nav-pills">
          
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <div class="dropdown">
            <button class="dropbtn">Dropdown
            <i class="fa fa-caret-down"></i>
           </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
      </div>
          </li>
          
          </ul>
        </div>

    </div>
  )
}

export default DemoVideo