import React, { useEffect } from "react";
import { useParams } from "react-router-dom";




export const Detalle =()=>{
    const param = useParams();
    // const url = "https://rickandmortyapi.com/api/character/";
    // const [characters, setCharacters] = useState([]);

    // useEffect(()=>{
    //     fetch(url)
    //     .then ((response)=> response.json())
    //     .then ((data) => setCharacters(data.results))
    //     .catch((error)=> console.log(error));
    // },[])


    return <h1>Hola {param.name}</h1>
}