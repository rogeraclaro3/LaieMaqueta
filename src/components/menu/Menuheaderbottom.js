import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import cerca from './cerca.png';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Menu extends React.Component {
	render() {
		return (
				<div className="container">
          <div className="wrap">
            <ul className="options">
              <li className="item">
                <div className="search" data-type="search-form">
                  <form id="search" className="form" action="https://www.laie.es/search" method="get">
                    <input type="cerca" className="form-control-cerca" id="Cerca" placeholder="Qu&egrave; est&agrave;s buscant?" required />
                      <Link to="/searchres"><input type="image" src={cerca} border="0" alt="Submit" className="bcerca"/></Link>
                  </form>
                </div>
              </li>
              <li className="item">
                <div className="lnk-buscador-avanzado hidden-xs visible-sm">
                  <a href="/#" className="bCercaAv">Cercador avan&ccedil;at</a>
                </div>
              </li>
              <li className="item">
                <Link className="dropbtn" to="/accedir">
                  <button className="btn menu btn-user" data-type="user">
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                </Link>
              </li>
              <li>|</li>
              <li className="item">
                <a href="https://www.laie.es/cistella" className="btn menu btn-cart"><FontAwesomeIcon icon={faShoppingCart} /><em className="fa fa-shopping-cart" aria-hidden="true"></em><span data-cart-page="/cart/total" className="number">0</span></a>
              </li>
                <li>|</li>
              <li className="item">
                <a href="/#" className="sel-idiomes">Catal&agrave;</a>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}
export default Menu;
