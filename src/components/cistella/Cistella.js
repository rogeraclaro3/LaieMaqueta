import React from 'react';
import MenuCistella from '../menu/MenuCistella';
import Producte from './Producte';

class CistellaResum extends React.Component {
	render() {
		return(
			<>
			<MenuCistella />
				<main role="main" className="inici-home pedido_resumen">
					<div className="container">
						<Producte />
					</div>
	  		</main>
	  	</>
		)
	}
}

export default CistellaResum;
