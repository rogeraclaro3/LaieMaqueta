import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
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
							<div className="col-md-12 col-lg-6">
								<Form className="card">
									<span className="card-title h5">Iniciar sessió</span>
									<Form.Group controlId="formGridNom">
										<Form.Label>E-mail</Form.Label>
										<Form.Control type="email" />
									</Form.Group>

									<Form.Group controlId="formGridPassword">
										<Form.Label>Contrassenya</Form.Label>
										<Form.Control type="password" />
									</Form.Group>
									<span className="text_form"><Link to="/contrassenya-recordar">Has oblidat la contrassenya?</Link></span>
									<div className="boto_submit">
									<Link to="/privat/ebooks"><Button variant="primary" type="submit">
										ACCEDIR
								  </Button></Link>
									</div>
								</Form>
							</div>
							<div className="col-md-12 col-lg-6">
								<Form className="card">
									<span className="card-title h5">Crea un compte nou</span>
									<span className="text_form">Si encara no tens un compte d'usuari a Laie, utilitza aquesta opció per accedir al formulari de registre.</span>
									<div className="boto_submit">
									<Link to="/registre"><Button variant="primary" type="submit">
										CREAR COMPTE
								  </Button></Link>
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
