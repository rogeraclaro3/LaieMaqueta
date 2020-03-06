import React from 'react';
import { Card, Button } from 'react-bootstrap';
import FotollibreRecomanatGran01 from './llibre01.jpg';

class Resultats extends React.Component {

  render() {
    return (
			<div className="row separab30">
				<div className="col-lg-3">
					<Card className="recom_card_llibre">
						<Card.Img variant="top" src={FotollibreRecomanatGran01} />
						<Card.Body>
							<Card.Title>Walter Gropius</Card.Title>
							<Card.Subtitle className="mb-2">Maccarthy, Fiona</Card.Subtitle>
							<Card.Text>
								22,90&euro;
							</Card.Text>
							<Button variant="primary">COMPRAR</Button>
						</Card.Body>
					</Card>
				</div>
				<div className="col-lg-3">
					<Card className="recom_card_llibre">
						<Card.Img variant="top" src={FotollibreRecomanatGran01} />
						<Card.Body>
							<Card.Title>Walter Gropius</Card.Title>
							<Card.Subtitle className="mb-2">Maccarthy, Fiona</Card.Subtitle>
							<Card.Text>
								22,90&euro;
							</Card.Text>
							<Button variant="primary">COMPRAR</Button>
						</Card.Body>
					</Card>
				</div>
				<div className="col-lg-3">
					<Card className="recom_card_llibre">
						<Card.Img variant="top" src={FotollibreRecomanatGran01} />
						<Card.Body>
							<Card.Title>Walter Gropius</Card.Title>
							<Card.Subtitle className="mb-2">Maccarthy, Fiona</Card.Subtitle>
							<Card.Text>
								22,90&euro;
							</Card.Text>
							<Button variant="primary">COMPRAR</Button>
						</Card.Body>
					</Card>
				</div>
				<div className="col-lg-3">
					<Card className="recom_card_llibre">
						<Card.Img variant="top" src={FotollibreRecomanatGran01} />
						<Card.Body>
							<Card.Title>Walter Gropius</Card.Title>
							<Card.Subtitle className="mb-2">Maccarthy, Fiona</Card.Subtitle>
							<Card.Text>
								22,90&euro;
							</Card.Text>
							<Button variant="primary">COMPRAR</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
    )
  }
}

export default Resultats;
