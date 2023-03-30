import React from "react";
import "../../styles/home.css";
import { CardLocations } from "../component/card";

export const Locations = () => (
	<div className="container">
		
		<div className="divTitulo rounded-pill border my-5 mx-4">
		<h1 className="titulo m-3">Locaciones</h1>
		</div>
		<div className="contenido">
		<CardLocations/>
		</div>
	</div>)