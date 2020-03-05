import React from 'react';
import {Card, Button} from 'react-bootstrap';
import FotoRegala01 from './regala01.jpg';
import FotoRegala02 from './regala02.jpg';

class Regala extends React.Component {

  render() {
    return (
			<div className="row separab30">
				<div className="col-lg-4">
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
				<div className="col-lg-4">
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
				<div className="col-lg-4">
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
    )
  }
}

export default Regala;
