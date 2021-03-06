import React from 'react';
import FotoTarja from './tarja.png';

class Tarjeta extends React.Component {

  render() {
    return (
        <div className="container-fluid separav60_pad separab60_pad tarjeta-fons">
					<div className="container">
						<div className="row">
							<div className="col-lg-5">
								<img className="img-fluid mx-auto d-block" src={FotoTarja} alt="Tarjeta Laie"/>
							</div>
							<div className="col-lg-1">
							</div>
							<div className="col-lg-6">
								<span className="titol_deco1">La</span> <span className="titol_deco2">targeta</span>
								<div className="text">
									<p className="negreta mt-3">Si per a tu la cultura &eacute;s un plaer, la targeta Laie t'interessa!</p>
									<p className='normal'>Literatura, art, ci&egrave;ncia, m&uacute;sica, c&ograve;mic, disseny, cinema, activitats infantils, solidaritat... tot a la teva butxaca!</p>
									<p className='normal'>1. Acumula punts per valor del 5% de cada compra o consumici&oacute; que facis a les nostres botigues i restaurants, o a la nostra p&agrave;gina web.</p>
									<p className='normal'>2. Bescanvia aquests punts per descomptes directes a caixa o b&eacute; per altres ofertes exclusives per als clients amb targeta!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
    )
  }
}

export default Tarjeta;
