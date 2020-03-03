import React from 'react';
import Button from 'react-bootstrap/Button';
import Menu from '../menu/Menu';
import Mnuresultats from './mnuresultats/Mnuresultats';
import Resultats from './resultats/Resultats';
import Newsletter from '../home/newsletter/Newsletter';
import Menubottom from '../menubottom/Menubottom';
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
									<Mnuresultats />
								</div>
							</div>
						</div>
						<div className="col-9">
							<div className="row separav60 separab60">
								<div className="col-lg-12">
									<h4>Resultats de la cerca: "Walter"</h4>
									<hr />
									<p className='normal'>no trobes el que estàs buscant? vés al <a href="">Cercador avançat</a></p>
									<Resultats />
									<Resultats />
									<Button className="btn-buit">VEURE'N MÉS</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Newsletter />
				<Menubottom />
	  	</main>
	  	<Footer />
	  	</>
		)
	}
}

export default SearchRes;
