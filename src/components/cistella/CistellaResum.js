import React from 'react';
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
						<div class="d-flex ratlleta-abaix">
							<div class="p-2">Cistella (2)</div>
							<div class="ml-auto p-2">51,50 €</div>
						</div>
					</div>
					<div className="col-12">
						<div class="d-flex separab30 ">
							<div class="p-2">Enviament</div>
							<div class="ml-auto p-2">(per confirmar)*</div>
						</div>
					</div>
					<div className="col-12">
						<div class="d-flex ratlleta-adalt separab30 ">
							<div class="p-2">Total (IVA Inclòs)</div>
							<div class="ml-auto p-2">51,50 €</div>
						</div>
					</div>
					<div className="col-12">
						<Button variant="primary">FINALITZAR COMPRA</Button>
					</div>
				</div>
			</>
		)
	}
}
export default CistellaResum;
