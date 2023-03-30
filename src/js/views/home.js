import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import logosinfondo from "../../img/logosinfondo.png"


export const Home = () => (
	<div className="text-center m-5">
		<p>
			<img src={logosinfondo}/>
		</p>
		<div className="divImage">
		<div className="fondoblog border rounded-pill">
		<h1 className="blog">Rick and Morty BLOG!</h1>
		</div>
		</div>
		<Link to="/personajes">
		<button className = "btn btn-dark btn-lg m-5">Personajes</button>
		</Link>
		<Link to="/locations">
		<button className = "btn btn-dark btn-lg m-5">Locaciones</button>
		</Link>
	</div>
);
