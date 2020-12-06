import React, { Fragment } from "react";
import {
  Link
} from "react-router-dom";

const Navbar = () => {
      
  return (
    <Fragment>
      <div className="banner-navbar">
          <p>Aprovecha en Diciembre, compra en linea y ahorra un 10% de descuento codigo: tienda2020</p>
         <a href="/tienda"> <button  className="btn btn-warning">Ver Tienda</button></a>
      </div>
      <div className="contenedor-navbar">
        <nav className="navbar navbar-expand-sm">
          <a href="/">
          <img
            className="img-fluid"
            width="200"
            src="https://www.manillasdecontrol.com/Resources/img/Logo-Manillas-de-control-acostado.png"
            alt="logo"
          />
          </a>

            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <a href="/"><i className="fab fa-whatsapp fa-lg"></i></a>
          </button>
          
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#menu-responsivo"
            aria-label="Toggle navigation"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"><i className="fas fa-bars fa-lg"></i></span>
          </button>
          
          

          <div className="collapse navbar-collapse" id="menu-responsivo">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
 
              <li className="nav-item dropdown dropdown-navbar">
                <div className="dropdown-toggle nav-link" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Manillas
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/productos/manillas-tyvek">Manillas Tyvek</Link>
                  <Link className="dropdown-item" to="/productos/manillas-plasticas">Manillas Plásticas</Link>
                  <Link className="dropdown-item" to="/productos/manillas-hospitalarias">Manillas Hospitalarias</Link>
                  <Link className="dropdown-item" to="/productos/manillas-tejidas">Manillas Tejidas</Link>
                  <Link className="dropdown-item" to="/productos/manillas-sublimadas">Manillas Sublimadas</Link>
                  <Link className="dropdown-item" to="/productos/manillas-plastisol">Manillas Plastisol</Link>
                  <Link className="dropdown-item" to="/productos/hologramas">Hologramas</Link>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/tienda">
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="carrito-navbar">
                <Link className="" to="/carrito">     
                   <i className="fas fa-shopping-cart fa-lg"></i>
                </Link>
            <div className="contadorProductos">
              <p>0</p>
            </div>
          </div>
          
          <div className="carrito-completo">
            <p>Tu carrito esta vacio</p>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
