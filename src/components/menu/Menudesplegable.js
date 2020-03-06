import React from 'react';
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';
import './menudesplegable.css';

const MenuDespl = () => (
	<div>
		<Menu attached='top' position='right'>
			<Dropdown simple text="Llibres">
				<Dropdown.Menu>
					<Dropdown.Item>Novetats</Dropdown.Item>
					<Dropdown.Item>Recomanats</Dropdown.Item>
					<Dropdown.Item>
						<span className='text'>Art / arquitectura / disseny</span>
						<Dropdown.Menu>
							<span className='text'>Art</span>
							<Dropdown.Item><div>Catàlegs d'art</div>sdasda</Dropdown.Item>
							<Dropdown.Item>Teoria de l'art</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown.Item>
					<Dropdown.Item>Comics / il·lustració</Dropdown.Item>
					<Dropdown.Item>Ciències / tecnologia</Dropdown.Item>
					<Dropdown.Item>Cine / teatre / música</Dropdown.Item>
					<Dropdown.Item>Poesia / clàssics</Dropdown.Item>
					<Dropdown.Item>Filosofia / religió / mitologia</Dropdown.Item>
					<Dropdown.Item>Historia / antropologia</Dropdown.Item>
					<Dropdown.Item>Estudis i ciències socials</Dropdown.Item>
					<Dropdown.Item>Lingüística / teoria / estudis literaris</Dropdown.Item>
					<Dropdown.Item>Narratives</Dropdown.Item>
					<Dropdown.Item>Oci</Dropdown.Item>
					<Dropdown.Item>Infantil i juvenil</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown simple text="Objectes">
				<Dropdown.Menu>
					<Dropdown.Item>
						<span className='text'>Novetats</span>
						<Dropdown.Menu>
							<Dropdown.Item>Documents</Dropdown.Item>
							<Dropdown.Item>Imatges</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown.Item>
					<Dropdown.Item>Recomanats</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown simple text="Agenda">
			</Dropdown>
			<Dropdown simple text="Magazine">
			</Dropdown>
			<Dropdown simple text="On Som">
			</Dropdown>
			<Dropdown simple text="Qui Som">
			</Dropdown>
			<Menu.Menu position='right'>
				<div className='ui right aligned category'>
				</div>
			</Menu.Menu>
		</Menu>

		{/* <Segment attached='bottom'>
			Hola que tal
    </Segment> */}
	</div>
)

export default MenuDespl
