import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FotoRegala01 from './regala01.jpg';
import FotoRegala02 from './regala02.jpg';
import Icona from '../icon02.png';

class Regala extends React.Component {

  render() {
    return (
        <div className="container separav60 separab60">
						<div className="row">
							<div className="col-lg-6"><img src={Icona} className="icona-align" alt="icona" /><h4>Regala millor amb Laie</h4></div>
							<div className="col-lg-6 text-right"><h4><a href="#">Veure'ls tots</a></h4></div>
						</div>
            <div className="row">
                <div className="col-lg-3">
									<Card className="regala_card_llibre">
										<Card.Img variant="top" src={FotoRegala01} />
										<Card.Body>
											<Card.Title className="regala_titol">Bol blanco Inca Oyoy</Card.Title>
											<Card.Text>
												25,00&euro;
											</Card.Text>
												<Link to="/objecte"><Button to="/objecte" variant="primary">COMPRAR</Button></Link>
										</Card.Body>
									</Card>
                </div>
								<div className="col-lg-3">
									<Card className="regala_card_llibre">
										<Card.Img variant="top" src={FotoRegala02} />
										<Card.Body>
											<Card.Title className="regala_titol">Camiseta bicicleta Oriol Maspons</Card.Title>
											<Card.Text>
												25,00&euro;
											</Card.Text>
											<Button variant="primary">COMPRAR</Button>
										</Card.Body>
									</Card>
								</div>
                <div className="col-lg-3">
									<Card className="regala_card_llibre">
										<Card.Img variant="top" src={FotoRegala01} />
										<Card.Body>
											<Card.Title className="regala_titol">Bol blanco Inca Oyoy</Card.Title>
											<Card.Text>
												25,00&euro;
											</Card.Text>
											<Button variant="primary">COMPRAR</Button>
										</Card.Body>
									</Card>
                </div>
								<div className="col-lg-3">
									<Card className="regala_card_llibre">
										<Card.Img variant="top" src={FotoRegala02} />
										<Card.Body>
											<Card.Title className="regala_titol">Camiseta bicicleta Oriol Maspons</Card.Title>
											<Card.Text>
												25,00&euro;
											</Card.Text>
											<Button variant="primary">COMPRAR</Button>
										</Card.Body>
									</Card>
								</div>
            </div>
						<div className="row separav30">
								<div className="col-lg-3">
									<Card className="regala_card_llibre">
										<Card.Img variant="top" src={FotoRegala02} />
										<Card.Body>
											<Card.Title className="regala_titol">Camiseta bicicleta Oriol Maspons</Card.Title>
											<Card.Text>
												25,00&euro;
											</Card.Text>
											<Button variant="primary">COMPRAR</Button>
										</Card.Body>
									</Card>
								</div>
                <div className="col-lg-3">
									<Card className="regala_card_llibre">
										<Card.Img variant="top" src={FotoRegala01} />
										<Card.Body>
											<Card.Title className="regala_titol">Bol blanco Inca Oyoy</Card.Title>
											<Card.Text>
												25,00&euro;
											</Card.Text>
											<Button variant="primary">COMPRAR</Button>
										</Card.Body>
									</Card>
                </div>
								<div className="col-lg-3">
									<Card className="regala_card_llibre">
										<Card.Img variant="top" src={FotoRegala02} />
										<Card.Body>
											<Card.Title className="regala_titol">Camiseta bicicleta Oriol Maspons</Card.Title>
											<Card.Text>
												25,00&euro;
											</Card.Text>
											<Button variant="primary">COMPRAR</Button>
										</Card.Body>
									</Card>
								</div>
                <div className="col-lg-3">
									<Card className="regala_card_llibre">
										<Card.Img variant="top" src={FotoRegala01} />
										<Card.Body>
											<Card.Title className="regala_titol">Bol blanco Inca Oyoy</Card.Title>
											<Card.Text>
												25,00&euro;
											</Card.Text>
											<Button variant="primary">COMPRAR</Button>
										</Card.Body>
									</Card>
                </div>
						</div>
        </div>
    )
  }
}

export default Regala;
