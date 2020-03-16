import React from 'react';
import { NavLink, Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Form, Col } from 'react-bootstrap';
import { faTrashAlt, faBook, faUser, faShoppingBag, faHeart, faAddressCard, faMapMarkerAlt, faKey, faInfoCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tarja from './tarjap.png';

class MenuAdreces extends React.Component {
	render() {
		return(
			<>
				<div className="quadrat_blanc contingut">
					<span className="icona_titol_gran"><FontAwesomeIcon icon={faUser} /></span>
					<span className="salutacio">Hola!<br/><span className="usuari">Nom Cognom</span></span>
					<span className="punts_usuari text">Tens 180 punts accumulats</span>
				</div>
				<div className="quadrat_blanc">
					<NavLink to="/privat/comandes" activeClassName="activa"><div className="seccio"><span className="icona_menu"><FontAwesomeIcon icon={faShoppingBag} /></span><span className="text_seccio">Les meves comandes</span></div></NavLink>
					<NavLink to="/privat/favorits" activeClassName="activa"><div className="seccio"><span className="icona_menu"><FontAwesomeIcon icon={faHeart} /></span>Els meus favorits</div></NavLink>
					<NavLink to="/privat/tarja" activeClassName="activa"><div className="seccio"><span className="icona_menu"><img src={Tarja} alt="targeta laie" /></span>La meva targeta Laie</div></NavLink>
				</div>
				<div className="quadrat_blanc">
					<NavLink to="/privat/dades" activeClassName="activa"><div className="seccio"><span className="icona_menu"><FontAwesomeIcon icon={faAddressCard} /></span>Les meves dades</div></NavLink>
					<NavLink to="/privat/adreces" activeClassName="activa"><div className="seccio"><span className="icona_menu"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>Les meves adreces</div></NavLink>
					<NavLink to="/privat/contrassenya" activeClassName="activa"><div className="seccio"><span className="icona_menu"><FontAwesomeIcon icon={faKey} /></span>Canviar contrassenya</div></NavLink>
					<NavLink to="/privat/ebooks" activeClassName="activa"><div className="seccio"><span className="icona_menu"><FontAwesomeIcon icon={faBook} /></span>Els meus eBooks</div></NavLink>
				</div>
				<div className="quadrat_blanc">
					<NavLink to="/privat/ajuda" activeClassName="activa"><div className="seccio"><span className="icona_menu"><FontAwesomeIcon icon={faInfoCircle} /></span>Necessites ajuda?</div></NavLink>
					<NavLink to="/privat/tancar" activeClassName="activa"><div className="seccio"><span className="icona_menu gira"><FontAwesomeIcon icon={faSignOutAlt} /></span>Tancar sessió</div></NavLink>
				</div>
			</>
		)
	}
}

export default MenuAdreces;
