import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import { faTrashAlt, faHeart, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Favoritsllista from './FavoritsLlista';
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
									<span className="icona_titol_gran"><FontAwesomeIcon icon={faHeart} /></span>
									<span className="titol">Els meus favorits</span>
									<span className="text"><Button className="btn-buit">AFEGIR-LOS TOTS A LA CISTELLA</Button></span>
									<Favoritsllista />
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
