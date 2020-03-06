import React from 'react';
import Menu from '../menu/Menu';
import FotosLlibre from './fotosllibre/Fotosllibre';
import ContingutLlibre from './contingutllibre/Contingutllibre';
import RecomanatsLlibre from './recomanatsllibre/Recomanatsllibre';
import Newsletter from '../home/newsletter/Newsletter';
import Footer from '../footer/Footer';

class Llibre extends React.Component {
	render() {
		return(
			<>
			<Menu />
				<main role="main" className="flex-shrink-0 inici-home fitxa">
					<div className="container separav120 separab120">
						<div className="row">
							<div className="imatge-detall col-4">
								<FotosLlibre />
							</div>
							<div className="contingut-detall col-8">
								<ContingutLlibre />
							</div>
						</div>
						<div className="row recomanats separav30">
								<RecomanatsLlibre />
						</div>
					</div>
					<Newsletter />
	  	</main>
	  	<Footer />
	  	</>
		)
	}
}

export default Llibre;
