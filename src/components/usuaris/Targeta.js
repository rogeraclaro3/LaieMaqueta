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
							<div className="titol_user">Gaudeix dels avantatges de la targeta Laie</div>
								<Form className="card">
									<Form.Group controlId="Nom">
										<Form.Label>Nom</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="Cognoms">
										<Form.Label>Cognoms</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="Dni">
										<Form.Label>Dni</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="Tel">
										<Form.Label>Telèfon</Form.Label>
										<Form.Control type="tel" />
									</Form.Group>

									<Form.Group controlId="Email">
										<Form.Label>E-mail</Form.Label>
										<Form.Control type="email" />
									</Form.Group>

									<Form.Group controlId="Adresa">
										<Form.Label>Adreça principal</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Row>
										<Form.Group as={Col} md="9" controlId="Localitat">
											<Form.Label>Localitat</Form.Label>
											<Form.Control />
										</Form.Group>

										<Form.Group as={Col} md="3" controlId="Zip">
											<Form.Label>Codi postal</Form.Label>
											<Form.Control />
										</Form.Group>
									</Form.Row>

									<Form.Group controlId="Sector">
										<Form.Label>Sector professional</Form.Label>
										<Form.Control type="text" />
									</Form.Group>

									<Form.Group controlId="Observacions">
										<Form.Label>Observacions</Form.Label>
										<Form.Control as="textarea" rows="10" />
									</Form.Group>

									<Form.Group controlId="formGridMotiuBaixa">
										<Form.Label>Vull recollir la targeta a</Form.Label>
										<Form.Control as="select">
											<option>Selecciona</option>
											<option value="01">Laie Pau Claris</option>
											<option value="02">Laie CaixaForum Barcelona</option>
											<option value="03">Laie CCCB</option>
											<option value="04">Laie CosmoCaixa</option>
										</Form.Control>
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
