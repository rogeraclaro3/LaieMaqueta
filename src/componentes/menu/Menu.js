import React from 'react';

import logolaie from './logo-laie.png';

class Menu extends React.Component {

  render() {
  	return (
      <header className="fixed-top">
        <nav role="navigation" className="main-nav fixed-top" id="main-nav">
          <div className="top-nav-logo">
            <a href="">
              <img src={logolaie} alt="Laie" />
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
      </header>
    );
  }
}

export default Menu;
