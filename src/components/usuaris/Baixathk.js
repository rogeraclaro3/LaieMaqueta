import React from 'react';
import { Button } from 'react-bootstrap';
import Menu from '../menu/Menu';
import Newsletter from '../home/newsletter/Newsletter';
import Footer from '../footer/Footer';
import BaixaImg from './baixa.png';


class Llibre extends React.Component {
	render() {
		return(
			<>
			<Menu />
				<main role="main" className="flex-shrink-0 inici-home">
					<div className="container separav120 separab120">
						<div className="row usuari">
							<div className="col-md-12 col-lg-8 mx-auto">
								<div className="imatge_thk"><img src={BaixaImg} alt=""/></div>
								<div className="titol_thk">Oh, quina ll&agrave;stima!</div>
								<div className="text_thk">Hem rebut correctament la teva sol.licitud i procedim a donar de baixa les teves dades. Si decideixes tornar, estarem encantats de poder ajudar-te.</div>
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
