import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Newsletter extends React.Component {

  render() {
    return (
        <div className="container-fluid separav60_pad separab60_pad subscriu-fons">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 centrat">
								<span className="titol">Subscriu-te al nostre newsletter</span>
								<span className="text">
								<p>Estigues al corrent de totes les novetats i aconsegueix un <strong>5% de descompte</strong> en la teva primera compra</p>
								</span>
							</div>
						</div>
						<form className="row mb-5">
							<div className="col-lg-12 centrat">
								<input type="email" className="form-control" id="Email" placeholder="e-mail" required /><button type="submit" className="btn btn-primary boto-nwsltr">Envia</button>
							</div>
						</form>
					</div>
					<ModalInici />
				</div>
    )
  }
}

function ModalInici() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Newsletter;
