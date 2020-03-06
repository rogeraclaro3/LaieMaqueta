import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FotoObjecteRecomanatGran01 from './regala01.jpg';
import FotoObjecteRecomanatGran02 from './regala02.jpg';
import Icona from '../../home/icon02.png';

class Recomanats_llibreries extends React.Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
			slidesToShow: 4,
			swipeToSlide: true,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
        <div className="container separav60">
        <div className="row">
					<div className="col-lg-6"><img src={Icona} className="icona-align" alt="icona"/><h4>Potser també t'agrada</h4></div>
					<div className="col-lg-6 text-right"><h4><a href="#">Veure'ls tots</a></h4></div>
				</div>
        <Slider {...settings} className='carrussel'>
					<div>
						<Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoObjecteRecomanatGran01} />
							<Card.Body>
								<Card.Title>SAMARRETA BICICLETA ORIOL MASPONS</Card.Title>
								<Card.Subtitle className="mb-2"></Card.Subtitle>
								<Card.Text>
									22,90&euro;
								</Card.Text>
								<Button variant="primary">COMPRAR</Button>
							</Card.Body>
						</Card>
					</div>
					<div>
						<Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoObjecteRecomanatGran02} />
							<Card.Body>
								<Card.Title>SAMARRETA BICICLETA ORIOL MASPONS</Card.Title>
								<Card.Subtitle className="mb-2"></Card.Subtitle>
								<Card.Text>
									22,90&euro;
								</Card.Text>
								<Button variant="primary">COMPRAR</Button>
							</Card.Body>
						</Card>
					</div>
					<div>
						<Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoObjecteRecomanatGran01} />
							<Card.Body>
								<Card.Title>SAMARRETA BICICLETA ORIOL MASPONS</Card.Title>
								<Card.Subtitle className="mb-2"></Card.Subtitle>
								<Card.Text>
									22,90&euro;
								</Card.Text>
								<Button variant="primary">COMPRAR</Button>
							</Card.Body>
						</Card>
					</div>
					<div>
						<Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoObjecteRecomanatGran02} />
							<Card.Body>
								<Card.Title>SAMARRETA BICICLETA ORIOL MASPONS</Card.Title>
								<Card.Subtitle className="mb-2"></Card.Subtitle>
								<Card.Text>
									22,90&euro;
								</Card.Text>
								<Button variant="primary">COMPRAR</Button>
							</Card.Body>
						</Card>
					</div>
					<div>
						<Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoObjecteRecomanatGran01} />
							<Card.Body>
								<Card.Title>SAMARRETA BICICLETA ORIOL MASPONS</Card.Title>
								<Card.Subtitle className="mb-2"></Card.Subtitle>
								<Card.Text>
									22,90&euro;
								</Card.Text>
								<Button variant="primary">COMPRAR</Button>
							</Card.Body>
						</Card>
					</div>
        </Slider>
      </div>
    )
  }
}

export default Recomanats_llibreries;
