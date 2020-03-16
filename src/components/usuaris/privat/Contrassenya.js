import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import { faTrashAlt, faKey, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
									<span className="icona_titol_gran"><FontAwesomeIcon icon={faKey} /></span>
									<span className="titol">Canviar contrassenya</span>
									<Form className="edita">

									<Form.Group controlId="formGridTel">
										<Form.Label>Contrassenya</Form.Label>
										<Form.Control type="password" />
									</Form.Group>

									<Form.Group controlId="formGridTel">
										<Form.Label>Canviar contrassenya</Form.Label>
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
