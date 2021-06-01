import logo from "./logo.svg";
import "./App.css";
import { Button, Carousel, Modal } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const displayModal = () => setModalShow(!modalShow);

  return (
    <div>
      <h1 className="bg-dark text-light p-2">Modal demo</h1>

      <Button variant="secondary" onClick={() => displayModal()}>
        Open Modal
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></MyVerticallyCenteredModal>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
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

export default App;
