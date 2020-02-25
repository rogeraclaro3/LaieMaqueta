import React from 'react';
import logolaie from './logo-laie.png';
import cerca from './cerca.png';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Menu extends React.Component {

  render() {
  	return (
      <header className="">
        <nav role="navigation" className="main-nav" id="main-nav">
          <div className="top-nav-logo">
            <a href="">
              <img src={logolaie} alt="Laie logo" />
            </a>
          </div>
          <ul id="main-nav-list">
            <li className="dropdown">
              <a href="" className="dropbtn">
                Llibres
              </a>
              <div className="dropdown-content">
                <a href="">Link 1</a>
                <a href="">Link 2</a>
                <a href="">Link 3</a>
              </div>
            </li>
            <li>
              <a href="">Objectes</a>
            </li>
            <li>
              <a href="">Agenda</a>
            </li>
            <li>
              <a href="">Magazine</a>
            </li>
            <li>
              <a href="">On som</a>
            </li>
            <li>
              <a href="">Qui som</a>
            </li>
          </ul>
        </nav>
        <div className="header-bottom">
        <div className="container">
          <div className="wrap">
            <ul className="options">
              <li className="item">
                <div className="search" data-type="search-form">
                  <form id="search" className="form" action="https://www.laie.es/search" method="get">
                    <input type="cerca" className="form-control-cerca" id="Cerca" placeholder="Què estàs buscant?" required />
                    <input type="image" src={cerca} border="0" alt="Submit" className="bcerca"/>
                  </form>
                </div>
              </li>
              <li className="item">
                <div className="lnk-buscador-avanzado hidden-xs visible-sm">
                  <a href="https://www.laie.es/cercador-avancat" className="bCercaAv">Cercador avançat</a>
                </div>
              </li>
              <li className="item">
                <button className="btn menu btn-user" data-type="user">
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </li>
              <li>|</li>
              <li className="item">
                <a href="https://www.laie.es/cistella" className="btn menu btn-cart"><FontAwesomeIcon icon={faShoppingCart} /><em className="fa fa-shopping-cart" aria-hidden="true"></em><span data-cart-page="/cart/total" className="number">0</span></a>
              </li>
                <li>|</li>
              <li className="item">
                <a href="#" className="sel-idiomes">Català</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </header>
    )
  }
}

export default Menu;
