import React from 'react';
import { Button, Card } from 'react-bootstrap';

class Contingut_Llibre extends React.Component {
	render() {
		return (
			<div className="container">
				<Card className="recom_card">
					<Card.Body className="body_recom">
						<Card.Title className="titol_recom">WALTER GROPIUS</Card.Title>
						<Card.Subtitle className="subtitol">LA VIDA DEL FUNDADOR DE LA BAUHAUS</Card.Subtitle>
						<Card.Subtitle className="autor">Maccarthy, Fiona</Card.Subtitle>
						<Card.Text className="preu_recom">
							22,90&euro; <span className="preu-iva">IVA inclòs</span>
						</Card.Text>
						<Button variant="primary">COMPRAR</Button><Button className="btn-buit">AFEGIR A FAVORITS</Button>
						<Card.Text className="fitxa-text">
						<span className="textintro">Descripció</span>
						Hace 100 años Walter Gropius fundó la Bauhaus, la escuela que introdujo una nueva
						concepción del arte y del diseño. Los nombres de quienes participaron en aquella
						asombrosa experiencia son casi tan reconocibles como su producción artística. Kandinski,
						Klee, Moholy-Nagy, Albers, Breuer, Van der Rohe… Las ideas visionarias que le dieron forma
						cobran vida en esta esperada biografía de Gropius. MacCarthy entrelaza su trayectoria
						personal y profesional con los acontecimientos que afrontó durante su vida: sirvió durante
						la Primera Guerra Mundial, se sumó a la revolución que desembocó en la República de
						Weimar, padeció el ascenso de Hitler y la Segunda Guerra Mundial… Así, la autora nos
						traslada, de una forma meticulosa y absorbente, a la vida cotidiana de una de las grandes
						figuras del panorama artístico del siglo XX.
						</Card.Text>
						<Card.Text className="fitxa-text">
						<span className="textintro">Detalls</span>
							Turner Publicaciones, S.l.<br/>
							2019<br />
							600 pàgines<br />
							Format: Rustega<br />
							ISBN: 9788417141882<br />
							Idioma: Castellà<br />
							Matèria: Assaig arquitectura<br />
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		)
	}
}

export default Contingut_Llibre;
