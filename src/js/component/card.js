import React, { useState, useEffect } from "react";
import planeta from "../../img/planeta.webp";

export const CardPersonajes = () => {
    const url = "https://rickandmortyapi.com/api/character/";
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setCharacters(data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container-fluid col">
            
            {characters.map((character)=>(
                <div className="card" style={{ width: "18rem" }} key={character.id}>
                    <img src={character.image} className="card-img-top" alt={character.name}/>
                    <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">{character.species}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>

                </div>
            ))}
        </div>
        
    );
};


export const CardLocations = () => {
    const url = "https://rickandmortyapi.com/api/location";
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setLocations(data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container-fluid">
            
            {locations.map((location)=>(
                <div className="card" style={{ width: "18rem" }} key={location.id}>
                    <img src={planeta} className="card-img-top" alt={location.name}/>
                    <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text">{location.type}</p>
                    <p className="card-text">{location.dimension}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>

                </div>
            ))}
        </div>
        
    );
};
