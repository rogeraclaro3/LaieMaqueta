import React from 'react';
import { faShoppingCart, faBoxOpen, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CistellaCap extends React.Component {
	render() {
		return (
				<div className="row">
					<div className="col-12">
						<div className="row icona mb-5">
							<div className="col-3 text-center">
								<span className="fons-icona actiu"><FontAwesomeIcon icon={faShoppingCart} /></span>
							</div>
							<div className="col-3 text-center">
								<span className="fons-icona"><FontAwesomeIcon icon={faUser} /></span>
							</div>
							<div className="col-3 text-center">
								<span className="fons-icona"><FontAwesomeIcon icon={faBoxOpen} /></span>
							</div>
							<div className="col-3 text-center">
								<span className="fons-icona"><FontAwesomeIcon icon={faCheck} /></span>
							</div>
						</div>
					</div>
				</div>
		)
	}
}
export default CistellaCap;
