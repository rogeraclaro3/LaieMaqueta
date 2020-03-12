import React from 'react';
import MenuCistella from '../menu/MenuCistella';
import Cistellacap from './cistellacap/CistellaCapEntrega';
import Cistellaentrega from './cistellaentrega/CistellaEntrega4';
import Cistellaresum from './cistellaresum/CistellaResumBonus';
import Cistellapeu from './cistellapeu/CistellaPeu';

class CistellaUsuari extends React.Component {
	render() {
		return(
			<>
			<MenuCistella />
				<main role="main" className="inici-home pedido_resumen cistella">
					<div className="container">
						<form name="usuari" method="post" action="/#" className="user_form">
							{/* Inici Capsalera */}
							<Cistellacap />
							{/* Fi Capsalera */}

							{/* Inici Columna 1 */}
							<div className="row">
								<div className="col-12 col-lg-8 separab30">
									<Cistellaentrega />
								</div>
								{/* Fi Columna 1 */}

								{/* Inici Columna 2 */}
								<div className="col-12 col-lg-4">
									<Cistellaresum />
								</div>
							</div>
							{/* Fi Columna 2 */}

							{/* Inici Peu */}
							<Cistellapeu />
							{/* Fi Peu */}
						</form>
					</div>
	  		</main>
	  	</>
		)
	}
}

export default CistellaUsuari;
