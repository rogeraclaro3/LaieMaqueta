import React from 'react';
//import './Slider.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Recomanats_grans extends React.Component {

  render() {
    return (

        <div className="container servicios separav60">
            <div className="row">
                <div className="col-lg-6">
									<Card style={{width: '18rem'}}>
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
											<Card.Text>
												Some quick example text to build on the card title and make up the bulk of
												the card's content.
											</Card.Text>
											<Card.Link href="#">Card Link</Card.Link>
											<Card.Link href="#">Another Link</Card.Link>
										</Card.Body>
									</Card>
                </div>

                <div className="col-lg-6">
									<Card style={{width: '18rem'}}>
										<Card.Img variant="top" src="holder.js/100px180" />
										<Card.Body>
											<Card.Title>Card Title</Card.Title>
											<Card.Text>
												Some quick example text to build on the card title and make up the bulk of
												the card's content.
											</Card.Text>
											<Button variant="primary">Go somewhere</Button>
										</Card.Body>
									</Card>
                </div>
            </div>
        </div>
    )
  }
}

export default Recomanats_grans;
