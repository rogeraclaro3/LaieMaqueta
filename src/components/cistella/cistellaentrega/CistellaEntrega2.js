import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { faBoxOpen, faShoppingCart, faGift } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Tarja from './vises.jpg';
import Paypal from './paypal.jpg';

class CistellaEntrega extends React.Component {

	render() {
		return (
			<>
				<div className="row">
					<div className="col-12">
						<span className="titol sotatitol"><FontAwesomeIcon icon={faShoppingCart} /> &nbsp;&nbsp;Entrega</span>
					</div>
					<div className="col-12">
						<div className="recollida"><input type="checkbox" className="form-checkbox" id="Recull_Botiga" defaultChecked /><span className="text-entrega">Desitjo recollir-ho a botiga</span> &nbsp;&nbsp;&nbsp;<span>Gratuït</span></div>
					</div>

					<div className="col-12">
						<div className="recollida select1">
							<Form className="card">
								<Form.Group controlId="formGridMotiuBaixa">
									<Form.Label>Provincia:</Form.Label>
									<Form.Control as="select">
										<option>Selecciona</option>
										<option value="01">Laie Pau Claris</option>
										<option value="02">Laie CaixaForum Barcelona</option>
										<option value="03">Laie CCCB</option>
										<option value="04">Laie CosmoCaixa</option>
									</Form.Control>
								</Form.Group>
							</Form>
						</div>
					</div>

					<div className="col-12 separab15">
						<div className="recollida select2">
							<Form className="card">
								<Form.Group controlId="formGridMotiuBaixa">
									<Form.Label>Selecciona la botiga en què vols recollir la teva comanda:</Form.Label>
									<Form.Control as="select">
										<option>Selecciona</option>
										<option value="01">Laie Pau Claris</option>
										<option value="02">Laie CaixaForum Barcelona</option>
										<option value="03">Laie CCCB</option>
										<option value="04">Laie CosmoCaixa</option>
									</Form.Control>
								</Form.Group>
							</Form>
						</div>
					</div>

					<div className="col-12">
						<div className="recollida"><input type="checkbox" className="form-checkbox" id="Recull_Botiga" /><span className="text-entrega">Desitjo rebre-ho al meu domicili</span></div>
					</div>

					<div className="col-12 separav30">
						<span className="titol sotatitol"><FontAwesomeIcon icon={faBoxOpen} /> &nbsp;&nbsp;Pagament</span>
					</div>

					<div className="col-12">
						<div className="fons-rec separab15">
							<div className="d-flex">
								<div className="p-0"><span className="text-entrega">Tens un cupó de descompte o targeta regal?</span></div>
							</div>
							<div className="d-flex">
								<div className="p-0"><input type="text" className="form-control-entrega" id="Descompte" placeholder="" required /></div>
								<div className="p-0"><Button variant="primary anivella-boto">APLICAR</Button></div>
							</div>
							<div className="d-flex">
								<div className="p-0"><span className="text">Introdueix el teu cupó de descompte o targeta regal</span></div>
							</div>
						</div>
					</div>

					<div className="col-12 separab15">
						<div className="fons-rec">
							<span className="text-entrega"><FontAwesomeIcon icon={faGift} /> &nbsp;&nbsp;El vols per regalar?</span><br/>
							<input type="checkbox" className="form-checkbox" id="Embolcall" /><span className="text">Sol·licita embolcall per a regal. Enviem la teva comanda a punt per regalar (sense cost afegit)</span><br />
							<input type="checkbox" className="form-checkbox" id="Tiquet-regal" required /><span className="text">Sol·licita tiquet regal. No inclou el preu dels articles.</span>
						</div>
					</div>

					<div className="col-12 separab15">
						<div className="quadre">
							<div className="d-flex">
								<div className="p-0 mr-auto"><span className="text-entrega">Pagament amb tarjeta</span></div>
								<div className="p-0"><img src={Tarja} alt="Targeta" /></div>
							</div>
						</div>
					</div>

					<div className="col-12">
						<div className="quadre">
							<div className="d-flex">
								<div className="p-0 mr-auto"><span className="text-entrega">Pagament amb Paypal</span></div>
								<div className="p-0"><img src={Paypal} alt="Paypal" /></div>
							</div>
						</div>
					</div>

				</div>
			</>
		)
	}
}
export default CistellaEntrega;
