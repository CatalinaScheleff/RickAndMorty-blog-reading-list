import React from "react";
import "../../styles/home.css";
import { CardLocations } from "../component/card";

export const Locations = () => (
	<div className="container">
		<div className="divTitulo rounded-pill border my-5">
		<h1 className="titulo m-3">Locaciones</h1>
		</div>
		<CardLocations/>
	</div>)