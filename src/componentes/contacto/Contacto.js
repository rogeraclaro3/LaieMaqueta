import React from 'react';

import Menu from '../menu/Menu';
import Formulario from './formulario/Formulario'; // Este Componente lo crearé a continuación </span>;
import Mapa from './mapa/Mapa'; // Este Componente lo crearé a continuación </span>;
import Footer from '../footer/Footer';

class Contacto extends React.Component {
	render() {
		return(

			<>
			<Menu />
			<main role="main" className="flex-shrink-0 mt-5">
				<div className="container">
					<h1 className="mb-5">Contacto</h1>
            		<div className="row">
            			<div className="col-md-6">
							<Formulario /> <span> Este Componente lo crearé a continuación </span>
						</div>

						<div className="col-md-6">

							<Mapa /> <span> Este Componente lo crearé a continuación </span>

						</div>

					</div>
				</div>

	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Contacto;
