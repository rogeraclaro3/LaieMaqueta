import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import { faTrashAlt, faMapMarkerAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tarja from './tarjap.png';
import MenuAdreces from './MenuAdreces';
import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';

class Adreces extends React.Component {
	render() {
		return(
			<>
			<Menu />
				<main role="main" className="flex-shrink-0 espai_usuari">
					<div className="container separav120_pad separab120_pad">
						<div className="row usuari">
							<div className="col-12 col-lg-4">
								<MenuAdreces />
							</div>
							<div className="col-12 col-lg-8">
								<div className="quadrat_blanc contingut">
									<span className="icona_titol_gran"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
									<span className="titol">Les meves adreces</span>
									<Link to="/privat/adreces"><span className="enrere"><FontAwesomeIcon icon={faArrowLeft} /> ENRERE</span></Link>
									<Form className="nova">
									<Form.Group controlId="formGridNom">
										<Form.Label>Nom de la persona destinatària</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="formGridTel">
										<Form.Label>Telèfon</Form.Label>
										<Form.Control type="tel" />
									</Form.Group>

									<Form.Group controlId="formGridRegió">
										<Form.Label>Regió</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="formGridAdresa">
										<Form.Label>Adreça principal</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="formGridProvincia">
										<Form.Label>Provincia</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} md="9" controlId="formGridLocalitat">
											<Form.Label>Localitat</Form.Label>
											<Form.Control />
										</Form.Group>

										<Form.Group as={Col} md="3" controlId="formGridZip">
											<Form.Label>Codi postal</Form.Label>
											<Form.Control />
										</Form.Group>
									</Form.Row>

									<Form.Group controlId="formGridCognoms">
										<Form.Label>Com vols guardar aquesta direcció (casa, feina, etc.)</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group id="formGridCheckbox2">
										<Form.Check type="checkbox" /><span className="text_seguit">Fes d'aquesta l'adreça principal</span>
									</Form.Group>

									<Form.Group id="formGridCheckbox3">
										<Form.Check type="checkbox" /><span className="text_seguit">Fes d'aquesta l'adreça de facturació</span>
									</Form.Group>

									<div className="boto_submit">
									<Button variant="primary" type="submit">
										GUARDAR
								  </Button>
									</div>
								</Form>
								</div>
							</div>
						</div>
					</div>
	  	</main>
	  	<Footer />
	  	</>
		)
	}
}

export default Adreces;
