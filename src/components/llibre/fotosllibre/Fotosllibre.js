import React from 'react';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FotollibreRecomanatGran01 from './llibre01.jpg';

class Fotos_llibre extends React.Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
			slidesToShow: 1,
			swipeToSlide: true,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <div className="container">
        <Slider {...settings} className='carrussel'>
          <div>
            <Card className="recom_card_llibre">
							<Card.Img variant="top" src={FotollibreRecomanatGran01} />
						</Card>
          </div>
					<div>
						<Card className="recom_card_llibre">
							<Card.Img variant="top" src={FotollibreRecomanatGran01} />
						</Card>
					</div>
        </Slider>
      </div>
    );
  }
}

export default Fotos_llibre;
