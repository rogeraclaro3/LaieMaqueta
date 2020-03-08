import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide01 from './render01.png';
import Slide02 from './slide02.png';
import Imatge02 from './fons02.png';

const fonsSlide02 = {
  backgroundImage: 'url(' + Imatge02 + ')',
};
class Carrussel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
			slidesToShow: 1,
			swipeToSlide: true,
      slidesToScroll: 1,
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
        <Slider {...settings} className="slPrincipal">
          <div className="slide_slPrincipal">
            <div>
            <div className="row container">
              <div className="col-lg-6 align-self-center">
                <div className="sl_titol">Presentació de Tot Abulcàssim, de Jordi Cornudella</div>
                <div className="sl_subtitol">NOVA DATA: Dimecres 12 de febrer a les 19h a Laie Pau Claris</div>
                <Link to="/llibre"><Button variant="primary">MÉS INFORMACIÓ</Button></Link>
              </div>
              <div className="col-lg-6">
                <img src={Slide01} />
              </div>
            </div>
            </div>
          </div>
          <div className="slide_slPrincipal">
            <div style={fonsSlide02}>
            <div className="row container">
              <div className="col-lg-6 align-self-center">
                <div className="sl_titol">L'art de regalar amb Laie</div>
                <div className="sl_subtitol">Aquest Nadal regala art, disseny, literatura. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus lacus,
                  dignissim sed consequat quis, hendrerit venenatis risus. Cras pulvinar, eros non pretium venenatis, neque ante pharetra turpis, non rutrum erat
                  libero in dolor. </div>
                <Link to="/llibre"><Button variant="primary">MÉS INFORMACIÓ</Button></Link>
              </div>
              <div className="col-lg-6">
                <img src={Slide02} />
              </div>
            </div>
            </div>
          </div>
        </Slider>
    );
  }
}

export default Carrussel;
