import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Tarja from './tarja.jpg';
import Button from 'react-bootstrap/Button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CistellaPeu extends React.Component {
	render() {
		return (
				<div className="row">
					<div className="col-12">

						<div className="row">
							<div className="col-12">
								<div className="d-flex separab30">
									<div className="p-2"><img src={Tarja} alt="Tarja" /></div>
									<div className="p-2"><span className="fluix">Pagament 100% segur</span></div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-12">
								<div className="d-flex separab30">
									<div className="p-2">*Recorda que els preus i les despeses d'enviament es confirmaran quan hagis arribat a finalitzar la compra</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-12">
								<div className="d-flex separab60">
									<div className="p-2">
										<Link to="/"><Button className="btn-buit"><FontAwesomeIcon icon={faArrowLeft} /> &nbsp;&nbsp;SEGUIR COMPRANT</Button></Link>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
		)
	}
}
export default CistellaPeu;
