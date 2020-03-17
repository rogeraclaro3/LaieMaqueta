import React from 'react';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FotoActivitat01 from './activitat01.jpg';
import FotoActivitat02 from './activitat02.jpg';
import Icona from '../icon01.png';

class Activitats extends React.Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
			slidesToShow: 3,
			swipeToSlide: true,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
					<div className="col-9 col-md-9 col-xl-6"><img src={Icona} className="icona-align" alt="icona" /><h4>Activitats i presentacions a Laie</h4></div>
					<div className="col-3 col-md-3 col-xl-6 text-right"><h4><a href="#">Veure'ls tots</a></h4></div>
				</div>
				<Slider {...settings} className='carrussel'>

					<div className="separah15">
            <Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoActivitat01} />
							<Card.Body className="text_petit">
								<Card.Text>Curs | 19/02/2020</Card.Text>
								<Card.Text className="text_exp">Presentació de El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
								<Card.Text>Tarannà Edicions i Laie us conviden a la presentació de: El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="separah15">
						<Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoActivitat01} />
							<Card.Body className="text_petit">
								<Card.Text>Curs | 19/02/2020</Card.Text>
								<Card.Text className="text_exp">Presentació de El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
								<Card.Text>Tarannà Edicions i Laie us conviden a la presentació de: El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="separah15">
						<Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoActivitat02} />
							<Card.Body className="text_petit">
								<Card.Text>Curs | 19/02/2020</Card.Text>
								<Card.Text className="text_exp">Presentació de El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
								<Card.Text>Tarannà Edicions i Laie us conviden a la presentació de: El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="separah15">
						<Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoActivitat01} />
							<Card.Body className="text_petit">
								<Card.Text>Curs | 19/02/2020</Card.Text>
								<Card.Text className="text_exp">Presentació de El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
								<Card.Text>Tarannà Edicions i Laie us conviden a la presentació de: El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="separah15">
						<Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoActivitat02} />
							<Card.Body className="text_petit">
								<Card.Text>Curs | 19/02/2020</Card.Text>
								<Card.Text className="text_exp">Presentació de El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
								<Card.Text>Tarannà Edicions i Laie us conviden a la presentació de: El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
							</Card.Body>
						</Card>
					</div>
					<div className="separah15">
						<Card className="regala_card_llibre">
							<Card.Img variant="top" src={FotoActivitat02} />
							<Card.Body className="text_petit">
								<Card.Text>Curs | 19/02/2020</Card.Text>
								<Card.Text className="text_exp">Presentació de El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
								<Card.Text>Tarannà Edicions i Laie us conviden a la presentació de: El universo mental, de Francesc Vieta i Mercè Fèrriz</Card.Text>
							</Card.Body>
						</Card>
					</div>
        </Slider>
      </div>
    );
  }
}

export default Activitats;
