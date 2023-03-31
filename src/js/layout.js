import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import {Personajes} from "./views/personajes";
import {Locations} from "./views/locations";
import { DetallePersonaje } from "./views/detallePersonaje";
import { DetalleLocacion } from "./views/detalleLocacion";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/personaje/detalle/:name"element={<DetallePersonaje/>}/>
						<Route path="/locacion/detalle/:id"element={<DetalleLocacion/>}/>
						<Route path="*" element={<h1>Not found!</h1>} />

						<Route path="/personajes" element={<Personajes />} />
						<Route path="/locations" element={<Locations />} />
						

					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
