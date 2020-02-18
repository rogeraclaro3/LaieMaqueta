import React from 'react';

import fotollibre from './render01.png';


class Slider extends React.Component {
  render () {
    return (
      <div id="slider" className="carousel slide shadow-grey mb-4" data-ride="carousel" data-interval="false">
        <ol className="carousel-indicators">
          <li data-target="#slider" data-slide-to="0" className="active" />
          <li data-target="#slider" data-slide-to="1" />
          <li data-target="#slider" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item container active">
              <a
                className="btn btn-lg btn-primary"
                href="https://blog.nubecolectiva.com/proteccion-de-rutas-o-vistas-mediante-contrasena-en-laravel-6-2/"
                target="_blank"
                role="button"
              >
                Leer más
              </a>
              <img
                className="img-fluid"
                src={fotollibre}
              />
          </div>
          <div className="carousel-item container">
            <img
              className="img-fluid"
              src={fotollibre}
            />
            <div className="elementos">
              <a
                className="btn btn-lg btn-primary"
                href="https://blog.nubecolectiva.com/5-tips-para-mejorar-la-ux-experiencia-del-usuario-de-un-menu-web-creado-con-bootstrap-4"
                target="_blank"
                role="button"
              >
                Leer más
              </a>
            </div>
          </div>
          <div className="carousel-item container">
            <img
              className="img-fluid"
              src={fotollibre}
            />
            <div className="elementos">
              <a
                className="btn btn-lg btn-primary"
                href="https://blog.nubecolectiva.com/como-crear-animaciones-en-android-trasladar-elemento-en-eje-x-y-java/"
                target="_blank"
                role="button"
              >
                Leer más
              </a>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#slider"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#slider"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Slider;
