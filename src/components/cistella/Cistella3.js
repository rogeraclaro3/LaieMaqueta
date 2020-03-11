import React from 'react';
import MenuCistella from '../menu/MenuCistella';
import Cistellacap from './cistellacap/CistellaCapUsuari';
import Cistellausuari from './cistellausuari/CistellaUsuari';
import Cistellausuarinou from './cistellausuari/CistellaUsuariNou';

class CistellaUsuari extends React.Component {
	render() {
		return(
			<>
			<MenuCistella />
				<main role="main" className="inici-home pedido_resumen">
					<div className="container">
						<form name="usuari" method="post" action="/#" className="user_form">
							{/* Inici Capsalera */}
							<Cistellacap />
							{/* Fi Capsalera */}

							{/* Inici Columna 1 */}
							<div className="row">
								<div className="col-12 col-lg-6 separab30">
									<Cistellausuari />
								</div>
								{/* Fi Columna 1 */}
								{/* Inici Columna 2 */}
								<div className="col-12 col-lg-6 separab60">
									<Cistellausuarinou />
								</div>
							</div>
							{/* Fi Columna 2 */}
						</form>
					</div>
	  		</main>
	  	</>
		)
	}
}

export default CistellaUsuari;
