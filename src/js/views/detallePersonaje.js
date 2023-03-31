import React from "react";
import { useParams } from "react-router-dom";
import { TarjetaPersonaje } from "../component/tarjeta";


export const DetallePersonaje =()=>{
    
    const param = useParams();

    return (<div>
    <div className="justify-content-center d-flex">
        <TarjetaPersonaje/>
        </div>
</div>)
   
}