import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
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
							<div className="col-md-12 col-lg-10 mx-auto">
							<div className="titol_user">Crear compte nou</div>
								<Form className="card">
									<Form.Group controlId="formGridNom">
										<Form.Label>Nom</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="formGridCognoms">
										<Form.Label>Cognoms</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="formGridEmail">
										<Form.Label>E-mail</Form.Label>
										<Form.Control type="email" />
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

									<Form.Group controlId="formGridPassword">
										<Form.Label>Contrassenya</Form.Label>
										<Form.Control type="password" />
									</Form.Group>

									<Form.Group controlId="formGridPassword2">
										<Form.Label>Confirmar contrassenya</Form.Label>
										<Form.Control type="password" />
									</Form.Group>

									<Form.Group id="formGridCheckbox1">
										<Form.Check type="radio" /><span className="text">Vull subscriure'm a la Newsletter de Laie</span>
									</Form.Group>

									<Form.Group id="formGridCheckbox2">
										<Form.Check type="checkbox" /><span className="text">He llegit i accepto el tractament de les meves dades conforme a la <a href="">polí­tica de privacitat</a></span>
									</Form.Group>

									<Form.Group id="formGridCheckbox3">
										<Form.Check type="checkbox" /><span className="text">Desitjo rebre informació comercial i ofertes per via electrònica</span>
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
