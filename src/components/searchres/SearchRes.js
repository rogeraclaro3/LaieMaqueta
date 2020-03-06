import React from 'react';
import Button from 'react-bootstrap/Button';
import Menu from '../menu/Menu';
import Menuresultats from '../menuresultats/Menuresultats';
import ResultatsLlibres from './resultatsllibres/Resultats';
import Newsletter from '../home/newsletter/Newsletter';
import Footer from '../footer/Footer';

class SearchRes extends React.Component {
	render() {
		return(
			<>
			<Menu />
			<main role="main" className="flex-shrink-0 inici-home">
				<div className="container">
					<div className="row separab200">
						<div className="col-3">
							<div className="row separav60 separab60">
								<div className="col-lg-12">
									<Menuresultats />
								</div>
							</div>
						</div>
						<div className="col-9">
							<div className="row separav60 separab60">
								<div className="col-lg-12">
										<h4 className="titol-secc">Resultats de la cerca: "Walter"</h4>
									<hr />
									<p className='normal'>no trobes el que estàs buscant? vés al <a href="">Cercador avançat</a></p>
									<ResultatsLlibres />
									<ResultatsLlibres />
										<div className="centra-veure_mes">
										<Button className="btn-buit">VEURE'N MÉS</Button>
									</div>
								</div>
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

export default SearchRes;
