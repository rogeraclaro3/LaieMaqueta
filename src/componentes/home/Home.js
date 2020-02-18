import React from 'react';
import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import RecomanatsGrans from './recomanats/RecomanatsGrans';
//import Servicios from './servicios/Servicios';
import Footer from '../footer/Footer';

class Home extends React.Component {
	render() {
		return(
			<>
			<Menu />
			<main role="main" className="flex-shrink-0 inici-home">
		            <div className="container-fluid">
		  	        <Slider />
		  	        {/* <Servicios /> */}
								<RecomanatsGrans />
		  	        <hr className="featurette-divider" />
		            </div>
	  		</main>
	  		<Footer />
	  		</>
		)
	}
}

export default Home;
