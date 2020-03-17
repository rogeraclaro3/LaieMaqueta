import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FotollibreRecomanatGran01 from './llibre01.jpg';
import Icona from '../icon01.png';

class Recomanats_llibreries extends React.Component {

	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			swipeToSlide: true,
			slidesToScroll: 5,
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
						infinite: true,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				}
			]
		};

    return (
        <div className="container separav60">
        <div className="row">
					<div className="col-9 col-md-9 col-xl-6"><img src={Icona} className="icona-align" alt="icona" /><h4>Novetats en llibres</h4></div>
					<div className="col-3 col-md-3 col-xl-6 text-right"><h4><a href="#">Veure'ls tots</a></h4></div>
				</div>
        <Slider {...settings} className='carrussel'>
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
        </Slider>
      </div>
    );
  }
}

export default Recomanats_llibreries;
