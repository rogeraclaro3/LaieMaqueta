import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import { faTrashAlt, faBook, faUser, faShoppingBag, faHeart, faAddressCard, faMapMarkerAlt, faKey, faInfoCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tarja from './tarjap.png';
import MenuAdreces from './MenuAdreces';
import Menu from '../../menu/Menu';
import Footer from '../../footer/Footer';

class Ebooks extends React.Component {
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
									<span className="icona_titol_gran"><FontAwesomeIcon icon={faBook} /></span>
									<span className="titol">Els meus eBooks</span>
									<span className="text">Estem treballant en aquesta secció i pròximament estaran disponibles. Si desitges
									descarregar-te un ebook comprat, prem en <a href="/#">aquest enllaç</a> i accedeix a l'àrea privada.
									O, posa't en contacte amb nosaltres i t'ho proporcionarem.</span>
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

export default Ebooks;
