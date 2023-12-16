import React from 'react';;
import './styles/Footer.css'

function Footer() {
  return (
    <footer className='footerApp'>
      <section className='footerAppSon1'>
        <h6>COPYRIGHT © 2023 MALLAS JF.</h6>
        <h6>TODOS LOS DERECHOS RESERVADOS.</h6>
      </section>
      <section className='footerAppSon2'>
        <h6>VENTAS NACIONALES</h6>
        <p>
          <b>Asesor digital</b><br />
          Celular y Whatsapp: <a href='https://api.whatsapp.com/send?phone=%2B573184577020&text=%C2%A1Hola%21+Estoy+interesado+en+obtener+m%C3%A1s+informaci%C3%B3n+sobre+tus+productos'>+573184577020</a><br />
          <a href='mallasjf@outlook.com'>mallasjf@outlook.com</a><br />
          <b>Call Center</b><br />
          Celular y Whatsapp: <a href='https://api.whatsapp.com/send?phone=%2B573052927699&text=%C2%A1Hola%21+Estoy+interesado+en+obtener+m%C3%A1s+informaci%C3%B3n+sobre+tus+productos'>+573052927699</a>  
        </p>
      </section>      
    </footer>
  );
}

export default Footer;
