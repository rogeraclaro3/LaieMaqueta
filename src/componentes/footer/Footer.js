import React from 'react';
import Logos from './logos.png';

class Footer extends React.Component {
  render() {
    return (
        <footer className="container">
            <p className="logosfooter float-right"><img src={Logos} alt="Laie logo" /></p>
            <p>&copy; Laietana de llibreteria, S.L. {(new Date().getFullYear())} - Tots els drets reservats</p>
        </footer>
    )
  }
}

export default Footer;
