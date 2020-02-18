import React from 'react';
//import './Slider.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FotollibreRecomanatGran01 from './llibre01.jpg';
import FotollibreRecomanatGran02 from './llibre02.png';

const fonsCard01 = {
  backgroundImage: 'url(' + FotollibreRecomanatGran01 + ')',
};

const fonsCard02 = {
  backgroundImage: 'url(' + FotollibreRecomanatGran02 + ')',
};


class Recomanats_grans extends React.Component {

  render() {
    return (

        <div className="container servicios separav60">
            <div className="row">

                <div className="col-lg-6">
									<Card className="recom_card fonsgroc" style = {fonsCard01}>
										<Card.Body>
											<Card.Subtitle className="mb-2 text-muted">Recomanats infantils</Card.Subtitle>
											<Card.Title>Pre-lectures</Card.Title>
											<Card.Text>
												22,90&euro;
											</Card.Text>
											<Button variant="primary">COMPRAR</Button>
										</Card.Body>
									</Card>
                </div>

								<div className="col-lg-6">
									<Card className="recom_card fonsblau" style={fonsCard02}>
										<Card.Body>
											<Card.Subtitle className="mb-2 text-muted">
												Reserva el teu exemplar
											</Card.Subtitle>
											<Card.Title>Decantaciones Kantianas</Card.Title>
											<Card.Text>
												14,20&euro;
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

export default Recomanats_grans;
