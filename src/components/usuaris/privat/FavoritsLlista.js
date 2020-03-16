import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Foto01 from './llibre01.jpg';
import Foto02 from './regala02.jpg';

class FavoritsLlista extends React.Component {
  render() {
    return (
			<div className="row separab30 favorits">
				<div className="col-lg-4">
					<Card className="favorits_card">
						<Card.Img variant="top" src={Foto01} />
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
					<Card className="favorits_card">
						<Card.Img variant="top" src={Foto02} />
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
					<Card className="favorits_card">
						<Card.Img variant="top" src={Foto01} />
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

export default FavoritsLlista;
