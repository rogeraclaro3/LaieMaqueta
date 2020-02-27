import React from 'react';
import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import RecomanatsLlibre from './recomanats-llibre/RecomanatsLlibre';
import RecomanatsGrans from './recomanats/RecomanatsGrans';
import NovetatsLlibre from './novetats-llibre/NovetatsLlibre';
import NovetatsGrans from './novetats/NovetatsGrans';
import Regala from './regala/Regala';
import Targeta from './targeta/Targeta';
import Activitats from './activitats/Activitats';
import Magazine from './magazine/Magazine';
import Newsletter from './newsletter/Newsletter';
import Menubottom from '../menubottom/Menubottom';
import Footer from '../footer/Footer';

class Home extends React.Component {
	render() {
		return(
			<>
			<Menu />
			<main role="main" className="flex-shrink-0 inici-home">
				<div className="container-fluid">
					<Slider />
					<RecomanatsLlibre />
					<RecomanatsGrans />
					<NovetatsLlibre />
					<NovetatsGrans />
					<Regala />
					<Targeta />
					<Activitats />
					<Magazine />
					<Newsletter />
					<Menubottom />
				</div>
	  	</main>
	  	<Footer />
	  	</>
		)
	}
}

export default Home;
