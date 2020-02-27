import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import RecomanatsLlibre from './recomanats-llibre/RecomanatsLlibre';
import RecomanatsGrans from './recomanats/RecomanatsGrans';
import NovetatsLlibre from './novetats-llibre/NovetatsLlibre';
import NovetatsGrans from './novetats/NovetatsGrans';
import Regala from './regala/Regala';
import Targeta from './targeta/Targeta';
import Activitats from './activitats/Activitats';
import Magazine from './magazine/Magazine';
import Newsletter from './newsletter/Newsletter';
import Menubottom from '../menubottom/Menubottom';
import Footer from '../footer/Footer';

class Home extends React.Component {
	render() {
		return(
			<>
			<Menu />
			<main role="main" className="flex-shrink-0 inici-home">
				<div className="container-fluid">
					<Slider />
					<RecomanatsLlibre />
					<RecomanatsGrans />
					<NovetatsLlibre />
					<NovetatsGrans />
					<Regala />
					<Targeta />
					<Activitats />
					<Magazine />
					<Newsletter />
					<Menubottom />
				</div>
	  	</main>
	  	<Footer />
			<ModalInici />
	  	</>
		)
	}
}

function ModalInici() {
	const [show, setShow] = React.useState(true);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Modal show={show} onHide={handleClose} dialogClassName="modal-inici" centered>
				<Modal.Header closeButton className="subscriu-fons"></Modal.Header>
				<div className="separab60_pad subscriu-fons">
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
			</Modal>
		</>
	);
}

export default Home;
