import React from 'react';
import { Button } from 'react-bootstrap';
import Menu from '../menu/Menu';
import Newsletter from '../home/newsletter/Newsletter';
import Footer from '../footer/Footer';
import PassImg from './registre.png';


class Llibre extends React.Component {
	render() {
		return(
			<>
			<Menu />
				<main role="main" className="flex-shrink-0 inici-home">
					<div className="container separav120 separab120">
						<div className="row usuari">
							<div className="col-md-12 col-lg-8 mx-auto">
								<div className="imatge_thk"><img src={PassImg} alt=""/></div>
								<div className="titol_thk">Solucionat!</div>
								<div className="text_thk">En breus rebr&agrave;s un correu per restablir la contrasenya.</div>
								<div className="boto_submit_seguir">
								<Button variant="primary" type="submit">
									INICIAR SESSI&Oacute;
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
