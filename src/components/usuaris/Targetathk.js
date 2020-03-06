import React from 'react';
import { Button } from 'react-bootstrap';
import Menu from '../menu/Menu';
import Newsletter from '../home/newsletter/Newsletter';
import Footer from '../footer/Footer';
import TargetaImg from './targeta.png';


class Llibre extends React.Component {
	render() {
		return(
			<>
			<Menu />
				<main role="main" className="flex-shrink-0 inici-home">
					<div className="container separav120 separab120">
						<div className="row usuari">
							<div className="col-md-12 col-lg-8 mx-auto">
								<div className="imatge_thk"><img src={TargetaImg} alt=""/></div>
								<div className="titol_thk">Gr&agrave;cies per la teva confian&ccedil;a i passi&oacute; per la cultura!</div>
								<div className="text_thk">Hem rebut les teves dades correctament. En breu, rebr&agrave;s un correu de confirmaci&oacute; i podr&agrave;s gaudir de tots els avantatges de la targeta Laie.<br />Benvingut/da!</div>
								<div className="boto_submit_seguir">
								<Button variant="primary" type="submit">
									SEGUIR NAVEGANT
								</Button>
								</div>
							</div>
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
