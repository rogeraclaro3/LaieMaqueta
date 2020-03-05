import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FotoObjecteRecomanatGran01 from './regala02.jpg';
import FotoObjecteRecomanatGran02 from './regala01.jpg';
import { baseUrl } from "./config";


class Fotos_llibre extends React.Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <a>
            <img src={`${baseUrl}regala0${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
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
          <div className="recom_card_llibre">
            <img src={FotoObjecteRecomanatGran01} />
          </div>
          <div className="recom_card_llibre">
            <img src={FotoObjecteRecomanatGran02} />
					</div>
        </Slider>
      </div>
    );
  }
}
export default Fotos_llibre;
