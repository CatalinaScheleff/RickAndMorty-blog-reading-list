import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.jpg"
import nav from "../../img/nav.jpg"


export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand  mb-0 h1">
					<img src={logo} className="logo"/>
					<img src={nav} className="navImage"/>
					</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-info m-4">Favoritos</button>
				</Link>
			</div>
		</nav>
	);
};
