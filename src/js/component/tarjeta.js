import React from "react";
import { Link } from "react-router-dom";


export const TarjetaPersonaje=()=>{
return ( <div className="tarjeta card m-5">
<div className="row g-0">
  <div className="col-md-4">
    <img src="..." className="img-fluid rounded-start" alt="..."/>
  </div>
  <div className="col-md-8">
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div className="justify-content-end d-flex">
<Link to="/personajes">
		<button className = "btn btn-dark btn-lg btnDetalle m-2">Atrás</button>
		</Link>
        <Link to="/">
        <button className = "btn btn-dark btn-lg m-2 ">Home</button>
        </Link>
</div>
</div>)
}



export const TarjetaLocacion=()=>{
  return ( <div className="tarjeta card m-5">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div className="justify-content-end d-flex">
  <Link to="/locations">
      <button className = "btn btn-dark btn-lg btnDetalle m-2">Atrás</button>
      </Link>
          <Link to="/">
          <button className = "btn btn-dark btn-lg m-2 ">Home</button>
          </Link>
  </div>
  </div>)
  }