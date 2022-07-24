import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/"><btn>Minha lista</btn></Link>
            </li>

            <li>
              <Link to="/watched"><>Lista de assistidos</></Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Adicionar filmes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
