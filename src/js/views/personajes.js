import React from "react";
import "../../styles/home.css";
import {CardPersonajes} from "../component/card"

export const Personajes = () => (
	<div className="container">
		<div className="divTitulo border rounded-pill my-5 mx-4">
		<h1 className="titulo m-3">Personajes</h1>
		</div>
		
		<div className="contenido">
		<CardPersonajes/>
		</div>
		
	</div>)