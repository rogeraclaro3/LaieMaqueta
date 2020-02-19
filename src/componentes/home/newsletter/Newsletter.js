import React from 'react';
import FotoTarja from './tarja.png';

class Tarjeta extends React.Component {

  render() {
    return (
        <div className="container-fluid separav60_pad separab60_pad tarjeta-fons">
					<div className="container">
							<div className="row">
									<div className="col-lg-12 centrat">
										<span className="titol">Subscriu-te al nostre newsletter</span>
										<span className="text">
											<p>estigues al corrent de totes les novetats i aconsegueix un 5% de descompte en la teva primera compra</p>
										</span>
									</div>
							</div>
					</div>
				</div>
    )
  }
}

export default Tarjeta;
