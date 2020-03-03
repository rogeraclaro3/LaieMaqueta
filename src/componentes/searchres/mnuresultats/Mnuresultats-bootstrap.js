import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

class Mnuresultats extends React.Component {

  render() {
    return (
			<div className="menu-resultats separab30">

				<Accordion>

					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="primer">
								Art / arquitectura / disseny
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="primer">
							<Card.Body>

								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="link" eventKey="primer-2">
											Art / arquitectura / disseny
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="primer-2">
										<Card.Body>
											Art
										</Card.Body>
									</Accordion.Collapse>
								</Card>

							</Card.Body>
						</Accordion.Collapse>
					</Card>

					<Card>
						<Card.Header>
							<Accordion.Toggle as={Button} variant="link" eventKey="segon">
								Click me!
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="segon">
							<Card.Body>Hello! I'm another body</Card.Body>
						</Accordion.Collapse>
					</Card>

				</Accordion>

			</div>
    )
  }
}

export default Mnuresultats;
