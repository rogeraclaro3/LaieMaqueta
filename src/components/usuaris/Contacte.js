import React from 'react';
import { Button, Form, Col, Card } from 'react-bootstrap';
import Menu from '../menu/Menu';
import Newsletter from '../home/newsletter/Newsletter';
import Footer from '../footer/Footer';

class Llibre extends React.Component {
	render() {
		return(
			<>
			<Menu />
				<main role="main" className="flex-shrink-0 inici-home">
					<div className="container separav120 separab120">
						<div className="row usuari">
							<div className="titol_user centrat">Hola, en qu&egrave; et podem ajudar?</div>
								<div className="col-md-12 col-lg-8">
								<Form className="card">
									<Form.Group controlId="Nom">
										<Form.Label>Nom</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="Cognoms">
										<Form.Label>Cognoms</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="formGridNom">
										<Form.Label>E-mail</Form.Label>
										<Form.Control type="email" />
									</Form.Group>

									<Form.Group controlId="Observacions">
										<Form.Label>El teu missatge</Form.Label>
										<Form.Control as="textarea" rows="10" />
									</Form.Group>

									<Form.Group id="formGridCheckbox2">
										<Form.Check type="checkbox" /><span className="text">He llegit i accepto el tractament de les meves dades conforme a la <a href="">pol&iacute;tica de privacitat</a></span>
									</Form.Group>

									<Form.Group id="formGridCheckbox3">
										<Form.Check type="checkbox" /><span className="text">Desitjo rebre informaci&oacute; comercial i ofertes per via electr&ograve;nica</span>
									</Form.Group>

									<span className="titol_camp captcha">Introdueix el codi visualitzat a la imatge:</span><br /><br />

									<Form.Group controlId="formGridProvincia">
										<Form.Control type="text" />
									</Form.Group>

									<div className="boto_submit">
									<Button variant="primary" type="submit">
										ENVIAR
								  </Button>
									</div>
								</Form>
							</div>
							<div className="col-md-12 col-lg-4">
								<Card className="text_contacte">
									<Card.Body>
										<Card.Text>
											<span className="titol_camp">O pots contactar directament amb nosaltres:</span><br/>
											<span className="text">Tel: <a href="tel:933181739">933 181 739</a><br/><a href="mailto:info@laie.es">info@laie.es</a></span>
											<br /><br />
											<span className="titol_camp">El nostre horari d'atenci&oacute; al p&uacute;blic &eacute;s de:</span><br />
											<span className="text">Dilluns a Divendres de 9h a 21h<br />Dissabtes de 10 a 21h</span>
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
						</div>
					</div>
					<Newsletter />
	  	</main>
	  	<Footer />
	  	</>
		)
	}
}

export default Llibre;
