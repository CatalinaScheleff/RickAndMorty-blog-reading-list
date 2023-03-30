import React from "react";
import "../../styles/home.css";
import {CardPersonajes} from "../component/card"

export const Personajes = () => (
	<div className="container">
		<h1>Personajes</h1>
		<div className="container">
		<div className="row">
		<CardPersonajes/>
		</div>
		</div>
	</div>)