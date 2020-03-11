import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';

class CistellaUsuari extends React.Component {
	render() {
		return (
			<>
				<div className="row resum usuari-cistella">
					<div className="col-12 text-center">
						<span className="fa-icona"><FontAwesomeIcon icon={faUser} /></span>
					</div>
					<div className="col-12 text-center">
						<span className="titol">Si ets un nou usuari</span>
					</div>
					<div className="col-12 text-center">
						Introdueix el teu e-mail per a continuar amb la teva compra. Podràs registrar-te i guardar les teves dades per a pròximes compres.
					</div>
					<div className="col-12">
						<span className="fluix">E-mail</span>
					</div>
					<div className="col-12">
						<input
							type="email"
							className="form-control usuari"
							id="Email"
							placeholder="exemple@exemple.cat"
							required
						/>
					</div>
					<div className="col-12">
						<input type="checkbox" className="form-checkbox" id="Newsletter" /><span className="text">Vull subscriure'm a la newsletter de Laie</span><br/>
						<input type="checkbox" className="form-checkbox" id="Accepto" required /><span className="text">Estic d’acord amb la política de privacitat</span>
					</div>
					<div className="col-12 text-center">
						<Link to="/cistella4">
							<Button variant="primary">CREAR COMPTE</Button>
						</Link>
					</div>
				</div>
			</>
		)
	}
}
export default CistellaUsuari;
