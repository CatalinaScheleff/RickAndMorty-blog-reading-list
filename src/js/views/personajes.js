import React from "react";
import "../../styles/home.css";
import {CardPersonajes} from "../component/card"

export const Personajes = () => (
	<div className="container">
		<div className="divTitulo border rounded-pill my-5">
		<h1 className="titulo m-3">Personajes</h1>
		</div>
		
		<div>
		<CardPersonajes/>
		</div>
		
	</div>)