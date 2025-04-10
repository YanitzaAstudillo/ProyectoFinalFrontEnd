import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contacto.css';

//template para el uso del programa que envia y contacta a mi correo personal//
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs
      .sendForm('service_sq3tcej', 'template_i0wdhot', form.current, {
        publicKey: 'fvzfcVtZJftSwctPO',
      })
      .then(
        () => {
          

          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
//navbar de pag secundarias y template del formulario para el correo personal//
  return (
    <div className='az'>

<ul className="nav nav-pills">
          
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/galeria">Galeria</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Contacto">Contactenos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
    </ul>
    
      <form ref={form} onSubmit={sendEmail}>
        <h2>Contacto</h2>
        <br />
        <div className='field'>
        <label>Name</label>
        <input type="text" name="user_name" />
        </div>
        <div className='field'>
        <label>Email</label>
      <input type="email" name="user_email" />
        </div>
        <div className='field'>
        <label>Message</label>
        </div>
      <textarea name="message" />
      <br />
      <br />
      <input type="submit" value="Send" />
    </form>
    </div>
        
      
    
  );
};

export default ContactUs