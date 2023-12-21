import { useEffect, useState } from 'react';
import axios from 'axios';

import './styles/Contact.css';

import FormControls from '../../components/Form/Form';
import SocialButton from '../../components/Button/Socialbutton';

const Contact = () => {
  const [asesor, setAsesor] = useState({});
  const [asesor2, setAsesor2] = useState({});

  useEffect(() => {
    axios
      /* 
      .get('http://localhost:3001/api/contacto') 
      .get('https://proyecto-final-backend-6jm6.onrender.com/api/contacto')
      */
      .get('https://proyecto-final-backend-6jm6.onrender.com/api/contacto')
      .then((response) => {
        setAsesor(response.data.asesor);
        setAsesor2(response.data.asesor2);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);  

  return (
    <>
      <div className='Namecontacto'>
        <h1>Contactenos</h1>
      </div>
      <div className="Contentgroup">
        <div className='Contentinform'>
        <div className='Contentasesor'>
          <h2>Asesorria personalizada</h2>
          <p>
            Nombre: {asesor.nombre}<br />
            Celular: {asesor.celular}<br />
            Email: {asesor.email}
          </p>
        </div>
        <div className='Contentasesor2'>
          <h2>Teléfonos</h2>
          <p>
            Nombre: {asesor2.nombre2}<br />
            Celular: {asesor2.celular2}
          </p>
        </div>
        </div>
        <FormControls />
      </div>
      <SocialButton />
    </>
  );
};


export default Contact;