import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logolaie from './logo-laie.png';
import Menudesplegable from './Menudesplegable';
import Menuheaderbottom from './Menuheaderbottom';

class Menu extends React.Component {

  render() {
  	return (
      <header className="container-fluid">
        <nav role="container navigation" className="main-nav" id="main-nav">
          <div className="top-nav-logo">
            <Link to="/"><img src={logolaie} alt="Laie logo" /></Link>
          </div>

					<Menudesplegable />


          {/* <ul id="main-nav-list">
            <li className="dropdown">
              <Link className="dropbtn" to="/llibre">Llibres</Link>
            </li>
            <li>
              <Link className="dropbtn" to="/objectes">Objectes</Link>
            </li>
            <li>
              <Link className="dropbtn" to="/objecte">Agenda</Link>
            </li>
            <li>
              <a href="/#">Magazine</a>
            </li>
            <li>
              <a href="/#">On som</a>
            </li>
            <li>
              <a href="/#">Qui som</a>
            </li>
          </ul> */}

        </nav>
        <div className="header-bottom">
					<Menuheaderbottom />
        </div>
      </header>
    )
  }
}

export default Menu;
