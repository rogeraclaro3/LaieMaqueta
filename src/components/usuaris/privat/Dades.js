import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import { faTrashAlt, faAddressCard, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
									<span className="icona_titol_gran"><FontAwesomeIcon icon={faAddressCard} /></span>
									<span className="titol">Les meves dades</span>
									<span className="text">No dubtis a editar qualsevol de les teves dades que es mostren a continuació, d'aquesta manera
									el teu compte de Laie estarà actualitzat.</span>
									<Form className="edita">
									<Form.Group controlId="formGridNom">
										<Form.Label>Nom</Form.Label>
										<Form.Control type="text" placeholder="Nom" />
									</Form.Group>

									<Form.Group controlId="formGridRegió">
										<Form.Label>Cognoms</Form.Label>
										<Form.Control type="text" placeholder="Cognom1 Cognom2" />
									</Form.Group>

									<Form.Group controlId="formGridAdresa">
										<Form.Label>E-mail</Form.Label>
										<Form.Control type="email" placeholder="xxx@xxx.com" />
									</Form.Group>

									<Form.Group controlId="formGridAdresa">
										<Form.Label>Telèfon</Form.Label>
										<Form.Control type="tel" placeholder="777 888 999" />
									</Form.Group>

									<Form.Group controlId="formGridTel">
										<Form.Label>Contrassenya</Form.Label>
										<Form.Control type="password" />
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
