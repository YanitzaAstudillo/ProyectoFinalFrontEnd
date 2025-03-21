import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contacto.css';
import Swal from 'sweetalert2';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    most()
    e.preventDefault();

    emailjs
      .sendForm('service_sq3tcej', 'template_i0wdhot', form.current, {
        publicKey: 'fvzfcVtZJftSwctPO',
      })
      .then(
        () => {
          const most=() =>{
              Swal.fire({
                  title:'Gracias por contactarnos!',
                  text: 'Enviado con éxito',
                  icon: 'question',
                  confirmButtonText: 'Aceptar'
              });
              useRef("")
          
          };

          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    
    <form ref={form} onSubmit={sendEmail}>
        <h2>Contacto</h2>
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
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs