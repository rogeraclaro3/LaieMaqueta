import React from 'react';
import MenuCistella from '../menu/MenuCistella';
import Cistellacap from './cistellacap/CistellaCap';
import Cistellaobjecte from './cistellaobjecte/CistellaObjecte';
import Cistellaresum from './cistellaresum/CistellaResumBonus';
import Cistellapeu from './cistellapeu/CistellaPeu';

class CistellaResum extends React.Component {
	render() {
		return(
			<>
			<MenuCistella />
				<main role="main" className="inici-home pedido_resumen">
					<div className="container">
						<form name="cart" method="post" action="/#" class="user_form">
							{/* Inici Capçalera */}
							<Cistellacap />
							{/* Fi Capçalera */}

							{/* Inici Columna 1 */}
							<div className="row">
								<div className="col-12 col-lg-8">
									<Cistellaobjecte />
									<div className="row">
										<div className="col-12">
											<div className="divisio"></div>
										</div>
									</div>
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

export default CistellaResum;
