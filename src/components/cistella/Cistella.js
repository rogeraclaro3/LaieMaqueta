import React from 'react';
import MenuCistella from '../menu/MenuCistella';
import Producte from './Producte';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CistellaResum extends React.Component {
	render() {
		return(
			<>
			<MenuCistella />
				<main role="main" className="inici-home pedido_resumen">
					<div className="container">
						<div className="row">
							<div className="col-12 col-lg-8">
								<Producte />
							</div>
							<div className="col-12 col-lg-4">
								{/* <ContingutLlibre /> */}
							</div>
						</div>
					</div>
	  		</main>
	  	</>
		)
	}
}

export default CistellaResum;
