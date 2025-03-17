import React from 'react'

import fondo from '../assets/Logo.jpg';
import fondo2 from '../assets/Collage.jpg';

import '../styles/home.css';


function Principal() {
  return (
  
    <div className='fondo'>
     <img src={fondo} alt="logo" className="background-image" />
     
      <div className='fondo2'>
      <img src={fondo2} alt="Collage" className='collage-img' />
      </div>

     <div>
     
     </div>
     
    </div>
  )
}

export default Principal