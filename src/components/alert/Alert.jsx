import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export function AlertDismissibleDanger() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>¡Oh, rayos! Tienes un error.</Alert.Heading>
        <p>
          Llena los campos correspondientes
        </p>
      </Alert>
    );
  }
}

export function AlertDismissibleSucces() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>¡Bien hecho!</Alert.Heading>
        <p>
          ¡Fantástico! Tu mensaje ha sido enviado con éxito. En unos minutos, uno de nuestros agentes estará en contacto contigo para ayudarte en lo que necesites.
        </p>
      </Alert>
    );
  }
}







/* import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
 */