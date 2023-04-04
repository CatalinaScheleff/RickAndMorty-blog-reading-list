import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Favoritos = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-outline-info m-4 btn-lg dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="false"
          aria-expanded="false"
        >Favoritos
        </button>
        <ul className="dropdown-menu dropdown-menu-end  me-4">
          {Array.isArray(store.favoritos) && store.favoritos.map((name,index) => {
            return  <div key={index} className="justify-content-center d-flex">
            <li className="dropdown-item" >{name}</li>
            <div className="btn btn-light btn-sm">X</div>
          </div>
          })}
        </ul>
      </div>
    </div>
  );
};
