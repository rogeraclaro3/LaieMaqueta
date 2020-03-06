import React from 'react';
//import Modal from 'react-bootstrap/Modal';
//import Button from 'react-bootstrap/Button';

class Newsletter extends React.Component {

  render() {
    return (
        <div className="container-fluid separav60_pad separab60_pad subscriu-fons">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 centrat">
								<span className="titol">Subscriu-te al nostre newsletter</span>
								<span className="text">
								<p>Estigues al corrent de totes les novetats i aconsegueix un <strong>5% de descompte</strong> en la teva primera compra</p>
								</span>
							</div>
						</div>
						<form className="row mb-5">
							<div className="col-lg-12 centrat">
								<input type="email" className="form-control" id="Email" placeholder="e-mail" required /><button type="submit" className="btn btn-primary boto-nwsltr">Envia</button><br/>
								<input type="checkbox" className="form-checkbox" id="Accepto" required /><span className="text">He llegit i accepto la <a href="">política de privacitat</a></span>
							</div>
						</form>
					</div>
				</div>
    )
  }
}

export default Newsletter;
