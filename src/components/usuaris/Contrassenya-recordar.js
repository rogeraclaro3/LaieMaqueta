import React from 'react';
import { Button, Form } from 'react-bootstrap';
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
							<div className="col-md-12 col-lg-6 mx-auto">
								<Form className="card">
									<span className="card-title h5">Has oblidat la teva contrassenya?</span>
									<Form.Group controlId="formGridNom">
										<span className="text_form separab30">Si has oblidat la teva contrasenya, indica la teva adreça de correu electrònic i t’enviarem un missatge amb instruccions de com recuperar-la.</span>
										<Form.Label>E-mail</Form.Label>
										<Form.Control type="email" />
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
