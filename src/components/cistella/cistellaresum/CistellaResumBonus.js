import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class CistellaResum extends React.Component {
	render() {
		return (
			<>
				<div className="row">
					<div className="col-12">
						<span className="titol2">Resum</span>
					</div>
				</div>

				<div className="row resum">
					<div className="col-12">
						<div className="d-flex ratlleta-abaix">
							<div className="p-2">Cistella (2)</div>
							<div className="ml-auto p-2">51,50 €</div>
						</div>
					</div>
					<div className="col-12">
						<div className="d-flex ratlleta-abaix">
							<div className="p-2">Enviament</div>
							<div className="ml-auto p-2">(per confirmar)*</div>
						</div>
					</div>
					<div className="col-12">
						<div className="d-flex separab30 ">
							<div className="mr-auto p-2">Bonus</div>
							<div className="p-2">-1,52 &euro;</div>
							<div className="p-2"><Button variant="primary">APLICAR</Button></div>
						</div>
					</div>
					<div className="col-12">
						<div className="d-flex ratlleta-adalt separab30 ">
							<div className="p-2">Total (IVA Inclòs)</div>
							<div className="ml-auto p-2">51,50 €</div>
						</div>
					</div>
					<div className="col-12">
						<Link to="/cistella3"><Button variant="primary">FINALITZAR COMPRA</Button></Link>
					</div>
				</div>
			</>
		)
	}
}
export default CistellaResum;
