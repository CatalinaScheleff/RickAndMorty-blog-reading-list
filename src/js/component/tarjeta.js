import React, {useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import planeta from "../../img/planeta.webp";


export const TarjetaPersonaje=()=>{
  const {store, actions} = useContext(Context)
  const param = useParams();

const [tarjetaPersonaje, setTarjetaPersonaje] = useState({})

useEffect(()=>{
  fetch("https://rickandmortyapi.com/api/character/"+param.id)
  .then (response=>response.json())
  .then (data=>setTarjetaPersonaje(data))
  .catch (error => console.log(error))
},[])

return ( <div>
 <div className="tarjeta card m-5">
<div className="row g-0">
  <div className="col-md-4">
    <img src={"https://rickandmortyapi.com/api/character/avatar/"+param.id+".jpeg"} className="img-fluid rounded-start" alt="..."/>
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h1 className="card-title">{tarjetaPersonaje.name} </h1>
      <p className="card-text">Especie: {tarjetaPersonaje.species}</p>
      <p className="card-text">Estado: {tarjetaPersonaje.status}</p>
      <p className="card-text">Origen: {tarjetaPersonaje.origin?.name}</p>
      <p className="card-text">Ubicación actual: {tarjetaPersonaje.location?.name}</p>
    </div>
  </div>
</div>
<div className="justify-content-end d-flex">
<Link to="/personajes">
		<button className = "btn btn-dark btnDetalle m-2">Atrás</button>
		</Link>
        <Link to="/">
        <button className = "btn btn-dark m-2 ">Home</button>
        </Link>
</div>
</div>
</div>)}


export const TarjetaLocacion=()=>{
  const {store, actions} = useContext(Context)
  const param = useParams();

const [tarjetaLocacion, setTarjetaLocacion] = useState({})

useEffect(()=>{
  fetch("https://rickandmortyapi.com/api/location/"+param.id)
  .then (response=>response.json())
  .then (data=>setTarjetaLocacion(data))
  .catch (error => console.log(error))
},[])

return ( <div>
 <div className="tarjeta card m-5">
<div className="row g-0">
  <div className="col-md-4">
    <img src={planeta} className="img-fluid rounded-start" alt="..."/>
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h1 className="card-title">{tarjetaLocacion.name} </h1>
      <br></br>
      <p className="card-text">Nombre: {tarjetaLocacion.name}</p>
      <p className="card-text">Tipo: {tarjetaLocacion.type}</p>
      <p className="card-text">Dimensión: {tarjetaLocacion.dimension}</p>
    </div>
  </div>
</div>
<div className="justify-content-end d-flex">
<Link to="/locations">
		<button className = "btn btn-dark btnDetalle m-2">Atrás</button>
		</Link>
        <Link to="/">
        <button className = "btn btn-dark m-2 ">Home</button>
        </Link>
</div>
</div>
</div>)}