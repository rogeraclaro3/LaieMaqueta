import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logolaie from './logo-laie.png';

class MenuCistella extends React.Component {

  render() {
  	return (
      <header className="container-fluid">
        <nav role="container navigation" className="main-nav" id="main-nav">
          <div className="top-nav-logo">
            <Link to="/"><img src={logolaie} alt="Laie logo" /></Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default MenuCistella;
