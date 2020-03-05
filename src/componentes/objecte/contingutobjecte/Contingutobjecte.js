import React from 'react';
import { Button, Card } from 'react-bootstrap';

class Contingut_Llibre extends React.Component {
	render() {
		return (
			<div className="container">
				<Card className="recom_card">
					<Card.Body className="body_recom">
						<Card.Title className="titol_recom">SAMARRETA BICICLETA ORIOL MASPONS</Card.Title>
						<Card.Subtitle className="subtitol"></Card.Subtitle>
						<Card.Subtitle className="autor"></Card.Subtitle>
						<Card.Text className="preu_recom">
							26,50&euro; <span className="preu-iva">IVA inclòs</span>
						</Card.Text>
						<Button variant="primary">COMPRAR</Button><Button className="btn-buit">AFEGIR A FAVORITS</Button>
						<Card.Text className="fitxa-text">
						<span className="textintro">Descripció</span>
						Samarreta de cotó orgànic que reprodueix la fotografia "Bicicleta (Eivissa)" d'Oriol Maspons (c. 1954). Talla: M. Disseny exclusiu de laieproduccions.
						</Card.Text>
						<Card.Text className="fitxa-text">
						<span className="textintro">Detalls</span>
							Composició<br/>
							Material<br />
							Dimensions<br />
							Orígen<br />
							Dissenyador<br />
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		)
	}
}
export default Contingut_Llibre;
