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
						<span className="titol">Si ja ets usuari de laie</span>
					</div>
					<div className="col-12 text-center">
						Accedeix al teu compte
					</div>
					<div className="col-12">
						<span className="fluix">E-mail</span>
					</div>
					<div className="col-12">
						<input
							type="email"
							className="form-control usuari"
							id="Email"
							placeholder=""
							required
						/>
					</div>
					<div className="col-12">
						<span className="fluix">Contrassenya</span>
					</div>
						<div className="col-12">
						<input
							type="password"
							className="form-control usuari"
							id="Password"
							placeholder=""
							required
						/>
					</div>
					<div className="col-12">
						<a href="/#" className="link">Has oblidat la teva contrassenya?</a>
					</div>
					<div className="col-12 text-center">
						<Link to="/cistella4">
							<Button variant="primary">INICIAR LA SESSIÓ</Button>
						</Link>
					</div>
				</div>
			</>
		)
	}
}
export default CistellaUsuari;
