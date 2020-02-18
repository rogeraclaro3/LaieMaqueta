import React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <footer className="container">
            <p className="float-right"><a href="#">Subir</a></p>
            <p>&copy; Laietana de llibreteria, S.L. {(new Date().getFullYear())} - Tots els drets reservats</p>
        </footer>
    )
  }
}

export default Footer;
