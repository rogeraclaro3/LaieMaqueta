import React from 'react';
import Fotollibre from './llibre01.jpg';
import Tarja from './tarja.jpg';
import Button from 'react-bootstrap/Button';
import { faTrashAlt, faShoppingCart, faBoxOpen, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Producte extends React.Component {
	render() {
		return (
			<>
			<div className="row icona mb-5">
				<div className="col-3 text-center">
					<span className="fons-icona actiu"><FontAwesomeIcon icon={faShoppingCart} /></span>
				</div>
				<div className="col-3 text-center">
						<span className="fons-icona"><FontAwesomeIcon icon={faUser} /></span>
				</div>
				<div className="col-3 text-center">
					<span className="fons-icona"><FontAwesomeIcon icon={faBoxOpen} /></span>
				</div>
				<div className="col-3 text-center">
					<span className="fons-icona"><FontAwesomeIcon icon={faCheck} /></span>
				</div>
			</div>

			<form name="cart" method="post" action="/cistella/actualitzar" class="user_form">

			<div className="row">
				<div className="col-12">
					<span className="titol"><FontAwesomeIcon icon={faShoppingCart} /> La teva cistella</span>
				</div>
			</div>

			<div className="row">

				<div className="col-3 col-lg-3">
					<div className="thumb-cart">
						<a href="/#"><img src={Fotollibre} alt="EL ARTE DE PERDER" /></a>
					</div>
				</div>

				<div className="col-8 col-lg-5">
					<div className="prod">
						<p className="title_book_list"><a href="/#">EL ARTE DE PERDER</a></p>
						<p className="writer_list">ISBN: 9788498389623</p>
						<p className="author"><a href="/#" title="Zeniter, Alice">Zeniter, Alice</a></p>
						<p className="stock">En estoc</p>
					</div>
				</div>

				<div className="col-3 order-4 order-lg-3 d-lg-none"></div>

				<div className="col-7 col-lg-2 order-4 order-lg-3 mt-4 mt-lg-0">
					<span className="input-group-btn">
						<button className="move" data-dir="dwn">-</button>
					</span>
					<input type="number" id="" name=""
						required="required" min="0" className="form-control text-center spinner_input" for="spinner_input"
						value="10" />
					<span className="input-group-btn">
						<button className="move" data-dir="up">+</button>
					</span>
				</div>

				<div className="col-2 col-lg-1 order-5 order-lg-4 mt-4 mt-lg-0">
					<span className="cantidad">21,00&nbsp;€</span>
				</div>

				<div className="col-1 col-lg-1 order-3 order-lg-5">
					<a href="/#"
						onclick="dataLayerEventRemoveFromCart(dataLayerEvents[912651], 3)">
						<FontAwesomeIcon icon={faTrashAlt} />
					</a>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div className="divisio"></div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<span className="titol2">Resum</span>
				</div>
			</div>

			<div className="row resum">
				<div className="col-12">
					<div class="d-flex ratlleta-abaix">
						<div class="p-2">Cistella (2)</div>
						<div class="ml-auto p-2">51,50 €</div>
					</div>
				</div>
				<div className="col-12">
				<div class="d-flex separab30 ">
						<div class="p-2">Enviament</div>
						<div class="ml-auto p-2">(per confirmar)*</div>
					</div>
				</div>
				<div className="col-12">
					<div class="d-flex ratlleta-adalt separab30 ">
						<div class="p-2">Total (IVA Inclòs)</div>
						<div class="ml-auto p-2">51,50 €</div>
					</div>
				</div>
					<div className="col-12">
						<Button variant="primary">FINALITZAR COMPRA</Button>
					</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div class="d-flex separab30">
								<div class="p-2"><img src={Tarja} alt="Tarja" /></div>
						<div class="p-2"><span className="fluix">Pagament 100% segur</span></div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div class="d-flex separab30">
								<div class="p-2">*Recorda que els preus i les despeses d'enviament es confirmaran quan hagis arribat a finalitzar la compra</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div class="d-flex separab60">
						<div class="p-2">
							<Button className="btn-buit">SEGUIR COMPRANT</Button>
						</div>
					</div>
				</div>
			</div>

			</form>
			</>
		)
	}
}

export default Producte;
