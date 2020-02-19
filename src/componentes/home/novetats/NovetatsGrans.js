import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NovetatGran01 from './nou01.jpg';
import NovetatGran02 from './nou02.jpg';

const fonsCard01 = {
  backgroundImage: 'url(' + NovetatGran01 + ')',
};

const fonsCard02 = {
  backgroundImage: 'url(' + NovetatGran02 + ')',
};


class Novetats_grans extends React.Component {

  render() {
    return (

        <div className="container servicios separav60">
            <div className="row">

                <div className="col-lg-6">
									<Card className="recom_card" style = {fonsCard01}>
										<Card.Body>
											<Card.Subtitle className="mb-2">Col&middot;lecci&oacute; exclusiva</Card.Subtitle>
											<Card.Title>Serafines Santa Maria d'&Aacute;neu</Card.Title>
											<Button variant="primary">COMPRAR</Button>
										</Card.Body>
									</Card>
                </div>

								<div className="col-lg-6">
									<Card className="recom_card" style={fonsCard02}>
										<Card.Body>
											<Card.Subtitle className="mb-2">Joieria</Card.Subtitle>
											<Card.Title>100 anys de Bauhaus</Card.Title>
											<Button variant="primary">COMPRAR</Button>
										</Card.Body>
									</Card>
								</div>

            </div>
        </div>
    )
  }
}

export default Novetats_grans;
