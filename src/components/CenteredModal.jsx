import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function CenteredModal(props) {
  const {show, message, handleClose} = props;
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>{message}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenteredModal;
