import React, { useContext, useState, useEffect } from "react";
import planeta from "../../img/planeta.webp";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPersonajes = () => {
  const { store, actions } = useContext(Context);

  
  return (
    <div className="container-fluid row justify-content-center d-flex">
      {store.character?.results?.map((character, index) => {
        return (
          <div className="card col-3 m-2" style={{ width: "18rem" }} key={character.id}>
            <img
              src={character.image}
              className="card-img-top"
              alt={character.name}
            />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">{character.species}</p>
              <div className="botonCarta">
                <Link to={"/personaje/detalle/" + character.id}>
                  <button className="btn btn-dark">Más información</button>
                </Link>
                <button className="botonCorazon btn btn-dark" 
                onClick={()=> actions.agregarFavorito(character.name)}>
                  {/* onclick guardar en el store character.name*/}
                  <i className="text-danger fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const CardLocations = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid row justify-content-center d-flex">
      {store.location?.results?.map((location, index) => {
        return (
          <div
            className="card col-3 m-2"
            style={{ width: "18rem" }}
            key={location.id}
          >
            <img src={planeta} className="card-img-top" alt={location.name} />
            <div className="card-body">
              <h5 className="card-title">{location.name}</h5>
              <p className="card-text">{location.species}</p>
              <div className="botonCarta">
              <Link to={"/locacion/detalle/" + location.id}>
                <button className="btn btn-dark">Más información</button>
              </Link>
              <button className="botonCorazon btn btn-dark">
                  <i className="text-danger fas fa-heart" 
                  onClick={()=> actions.agregarFavorito(location.name)}></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
