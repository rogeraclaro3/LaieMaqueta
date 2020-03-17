import React from 'react';
import Logopeu from './laie.svg';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MenuBottom extends React.Component {

  render() {
    return (
			<div className="bg-blue">
				<div className="container">
				<div className="row">
					<div className="hidden-xs visible-sm col-sm-2 col-md-2 col-lg-2">
						<div className="brand">
							<a className="thumb" title="" href="https://www.laie.es/"><img src={Logopeu} alt="laie" className="Logopeu" /></a>
						</div>
					</div>
					<div className="col-12 col-sm-7 col-md-7 col-lg-7">
						<p className="more-sites half">
							<a href="https://www.laie.es/on-som" title="">On som?</a>
							<a href="https://www.laie.es/contacte" title="" rel="nofollow">Contacte</a>
							<a href="https://www.laie.es/targeta-laie/avantatges" title="">Targeta Laie</a>
							<a href="https://www.laie.es/treballa-amb-nosaltres" title="" rel="nofollow">Treballa amb nosaltres</a>
							<a href="https://www.laie.es/targeta-laie/sollicitar-targeta" title="">Sol·licitar Targeta Laie</a>
							<a href="https://www.laie.es/aviso-legal" title="" rel="nofollow">Avís legal</a>
							<a href="https://www.laie.es/targeta-laie/promocions" title="">Promocions</a>
							<a href="https://www.laie.es/politica-de-cookies" title="" rel="nofollow">Política de cookies</a>
							<a href="https://www.laie.es/targeta-laie/collaboradors" title="">Col·laboradors</a>
							<a href="https://www.laie.es/condiciones-de-compra" title="" rel="nofollow">Condicions de compra</a>
							<a href="https://www.laie.es/politica-de-privacidad" title="" rel="nofollow">Política de privacitat</a>
						</p>
					</div>
					<div className="col-12 col-sm-3 col-md-3 col-lg-3">
						<p className="more-sites">
							Carrer de Pau Claris, 85<br />
							08010 Barcelona<br />
							<a href="tel:933181739">933 181 739</a>
							<a href="mailto:info@laie.es">info@laie.es</a>
						</p>
						<ul className="share">
							<li>
									<a href="https://www.facebook.com/llibrerialaie" target="_blank" rel="noopener noreferrer" title="Facebook"><FontAwesomeIcon icon={faFacebookSquare} /></a>
							</li>
							<li>
									<a href="https://twitter.com/laietana" target="_blank" rel="noopener noreferrer" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
							</li>
							<li>
									<a href="https://www.pinterest.es/laietana/" target="_blank" rel="noopener noreferrer" title="Pinterest"><FontAwesomeIcon icon={faPinterest} /></a>
							</li>
							<li>
									<a href="https://www.instagram.com/llibrerialaie/" target="_blank" rel="noopener noreferrer" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
							</li>
						</ul>
					</div>
					</div>
				</div>
			</div>
    )
  }
}

export default MenuBottom;
