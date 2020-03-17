import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logolaie from './logo-laie.png';
import cerca from './cerca.png';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Menu extends React.Component {

	constructor() {
		super();
		this.state = {
			showMenu: false,
		};
		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu(event) {
		event.preventDefault();
		this.setState({ showMenu: true }, () => {
			document.addEventListener('click', this.closeMenu);
		});
	}

	closeMenu(event) {
		if (!this.dropdownMenu.contains(event.target)) {
			this.setState({ showMenu: false }, () => {
				document.removeEventListener('click', this.closeMenu);
			});
		}
	}

  render() {
  	return (
      <header className="container-fluid">

          <Navbar collapseOnSelect expand="lg" variant="dark" className="container main-nav">
          <Navbar.Brand href="/"><img src={logolaie} alt="Laie logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/#" onClick={this.showMenu}>Llibres</Nav.Link>
              <Nav.Link href="/objectes">Objectes</Nav.Link>
              <Nav.Link href="/objecte">Agenda</Nav.Link>
              <Nav.Link href="/#">Magazine</Nav.Link>
              <Nav.Link href="/#">On Som</Nav.Link>
              <Nav.Link href="/#">Qui Som</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="header-bottom">
          <div className="container">
          <div className="wrap">
            <ul className="options">
              <li className="item">
                <div className="search" data-type="search-form">
                  <form id="search" className="form" action="https://www.laie.es/search" method="get">
                    <input type="cerca" className="form-control-cerca" id="Cerca" placeholder="Què estàs buscant?" required />
                      <Link to="/searchres"><input type="image" src={cerca} border="0" alt="Submit" className="bcerca"/></Link>
                  </form>
                </div>
              </li>
              <li className="item">
                <div className="lnk-buscador-avanzado hidden-xs visible-sm">
                  <a href="/#" className="bCercaAv">Cercador avançat</a>
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
                <Link className="btn menu btn-cart" to="/cistella">
                  <FontAwesomeIcon icon={faShoppingCart} /><em className="fa fa-shopping-cart" aria-hidden="true"></em><span data-cart-page="/cart/total" className="number">0</span>
                </Link>
              </li>
                <li>|</li>
              <li className="item">
                <a href="/#" className="sel-idiomes">Catal&agrave;</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
        {
          this.state.showMenu
            ? (
              <div
                className="fons-menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <div className="menullibres">
                  <ul>
                    <li><a href="/#">Novetats</a></li>
                    <li><a href="/#">Recomanats</a></li>
                    <li><a href="/#">Art / arquitectura / disseny</a></li>
                    <li><a href="/#">Comics / il.lustraci&oacute;</a></li>
                    <li><a href="/#">Ci&egrave;ncies / tecnologia</a></li>
                    <li><a href="/#">Cine / teatre / m&uacute;sica</a></li>
                    <li><a href="/#">Poesia / cl&agrave;ssics</a></li>
                    <li><a href="/#">Filosofia / religi&oacute; / mitologia</a></li>
                    <li><a href="/#">Historia / antropologia</a></li>
                    <li><a href="/#">Estudis i ci&egrave;ncies socials</a></li>
                    <li><a href="/#">Lingu&iacute;stica / teoria / estudis literaris</a></li>
                    <li><a href="/#">Narratives</a></li>
                    <li><a href="/#">Oci</a></li>
                    <li><a href="/#">Infantil i juvenil</a></li>
                  </ul>
                </div>
              </div>
            )
            : (
              null
            )
        }
      </header>
    )
  }
}

export default Menu;
