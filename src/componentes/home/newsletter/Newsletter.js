import React from 'react';

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
								<input type="email" className="form-control" id="Email" placeholder="e-mail" required /><button type="submit" className="btn btn-primary boto-nwsltr">Envia</button>
							</div>
						</form>
					</div>
				</div>
    )
  }
}

export default Newsletter;
