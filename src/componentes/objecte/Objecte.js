import React from 'react';
import Menu from '../menu/Menu';
import FotosObjecte from './fotosobjecte/Fotosobjecte';
import ContingutObjecte from './contingutobjecte/Contingutobjecte';
import RecomanatsObjecte from './recomanatsobjecte/Recomanatsobjecte';
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
							<div className="imatge-detall col-5">
								<FotosObjecte />
							</div>
							<div className="contingut-detall col-7">
								<ContingutObjecte />
							</div>
						</div>
						<div className="row recomanats separav30">
							<RecomanatsObjecte />
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
