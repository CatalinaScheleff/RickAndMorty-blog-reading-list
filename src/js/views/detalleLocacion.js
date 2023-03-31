import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TarjetaLocacion } from "../component/tarjeta";


export const DetalleLocacion =()=>{
    
    const param = useParams();

    return (<div>
    <div className="justify-content-center d-flex">
        <TarjetaLocacion/>
        </div>
</div>)
   
}