import React from 'react';
import Cistellacap from './CistellaCap';
import Cistellaobjecte from './CistellaObjecte';
import Cistellaresum from './CistellaResum';
import Cistellapeu from './CistellaPeu';

class Producte extends React.Component {
	render() {
		return (
			<form name="cart" method="post" action="/#" class="user_form">
{/* Inici Capçalera */}
				<Cistellacap />
{/* Fi Capçalera */}
{/* Inici Columna 1 */}
				<div className="row">
					<div className="col-12 col-lg-8">
						<Cistellaobjecte />
						<div className="row">
							<div className="col-12">
								<div className="divisio"></div>
							</div>
						</div>
					</div>
{/* Fi Columna 1 */}
{/* Inici Columna 2 */}
					<div className="col-12 col-lg-4">
						<Cistellaresum />
					</div>
				</div>
{/* Fi Columna 2 */}
{/* Inici Peu */}
				<Cistellapeu />
{/* Fi Peu */}
			</form>
		)
	}
}

export default Producte;
