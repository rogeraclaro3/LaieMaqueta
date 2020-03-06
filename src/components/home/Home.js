import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Menu from '../menu/Menunou';
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
import Footer from '../footer/Footer';

class Home extends React.Component {
	render() {
		return (
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
					<Newsletter />
			</Modal>
		</>
	);
}

export default Home;
