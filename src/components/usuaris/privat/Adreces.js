import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import { faTrashAlt, faMapMarkerAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
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
									<Link to="/privat/adrecesafegir"><span className="text"><Button className="btn-buit">AFEGIR ADREÇA</Button></span></Link>
								</div>
								<div className="quadrat_blanc contingut">
									<div className="d-flex separab15 ">
										<div className="mr-auto adresa_titol">Casa</div>
										<div className="adresa_edit"><FontAwesomeIcon icon={faEdit} /> Editar</div>
										<div className="adresa_edit"><FontAwesomeIcon icon={faTrashAlt} /> Eliminar</div>
									</div>
									<span className="adresa_text">Nom Cognom Cognom</span>
									<span className="adresa_text">Carrer de Pau Claris, 85</span>
									<span className="adresa_text">08010 Barcelona</span>
									<span className="adresa_text">Barcelona, Espanya</span>
									<span className="adresa_peutext">Has marcat aquesta adreça com a la principal</span>
								</div>
								<div className="quadrat_blanc contingut">
									<div className="d-flex separab15 ">
										<div className="mr-auto adresa_titol">Feina</div>
										<div className="adresa_edit"><FontAwesomeIcon icon={faEdit} /> Editar</div>
										<div className="adresa_edit"><FontAwesomeIcon icon={faTrashAlt} /> Eliminar</div>
									</div>
									<span className="adresa_text">Nom Cognom Cognom</span>
									<span className="adresa_text">Carrer de Pau Claris, 85</span>
									<span className="adresa_text">08010 Barcelona</span>
									<span className="adresa_text">Barcelona, Espanya</span>
									<span className="adresa_peutext">Has marcat aquesta adreça com a la principal</span>
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
