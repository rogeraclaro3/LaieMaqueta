import React from 'react';
import Fotollibre from './llibre01.jpg';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CistellaObjecte extends React.Component {
	render() {
		return (
			<>
			<div className="row">
				<div className="col-12">
					<span className="titol"><FontAwesomeIcon icon={faShoppingCart} /> &nbsp;&nbsp;La teva cistella</span>
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
						onclick="">
						<FontAwesomeIcon icon={faTrashAlt} />
					</a>
				</div>

			</div>
			</>
		)
	}
}
export default CistellaObjecte;
