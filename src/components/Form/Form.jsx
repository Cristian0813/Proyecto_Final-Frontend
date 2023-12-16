import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

import { AlertDismissibleDanger, AlertDismissibleSucces } from '../alert/Alert';
import './styles/Form.css';

function FormControls() {
  const initialFormData = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    description: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showDangerAlert, setShowDangerAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAlerts = (type) => {
    // Mostrar la alerta de éxito durante 2 segundos
    if (type === 'success') {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 3000);
    }

    // Mostrar la alerta de error durante 2 segundos
    if (type === 'danger') {
      setShowDangerAlert(true);
      setTimeout(() => {
        setShowDangerAlert(false);
      }, 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   // Validación para asegurarse de que los campos requeridos estén llenos
   if (
    !formData.first_name.trim() ||
    !formData.last_name.trim() ||
    !formData.email.trim()
  ) {
    handleAlerts('danger');
    return;
  }

    /*
      Axios.post('https://localhost:3001/api/cliente', formData, { timeout: 5000 })
      Axios.post('https://proyecto-final-backend-6jm6.onrender.com/api/cliente', formData, { timeout: 5000 })
    */
      Axios.post('https://proyecto-final-backend-6jm6.onrender.com/api/cliente', formData, { timeout: 5000 })
      .then((response) => {
        setFormData(initialFormData);
        handleAlerts('success');
      })
      .catch((error) => {
        handleAlerts('danger');
      });
  };

  return (
    <>
      <div className='Form_Group'>
        <h2>Pregunta para brindarte más infromación</h2>

        {showSuccessAlert && <AlertDismissibleSucces />}
        {showDangerAlert && <AlertDismissibleDanger />}

        <Form className='FormGroup' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe tu nombre"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe tu apellido"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Escribe tu número de teléfono"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          <div className='FormButton'>
            <Button variant="outline-secondary" type="button">Cancelar</Button>{' '}
            <Button variant="outline-primary" type="submit">Enviar</Button>{' '}
          </div>
        </Form>
      </div>
    </>
  );
}

export default FormControls;
