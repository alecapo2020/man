import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './navbar.css'


const Navbar = () => {
  return (
    <Fragment>
      {/* <div className="banner-navbar">
          <p>Aprovecha en Diciembre, compra en linea y ahorra un 10% de descuento codigo: tienda2020</p>
         <a href="/tienda"> <button  className="btn btn-warning">Ver Tienda</button></a>
      </div> */}
      <div className="contenedor-navbar">
        <div className="container-fluid">
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
            ></button>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#menu-responsivo"
              aria-label="Toggle navigation"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars fa-lg"></i>
              </span>
            </button>

            <div className="collapse navbar-collapse" id="menu-responsivo">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/manillas">
                    Manillas
                  </Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link" to="/tienda">
                  Tienda
                </Link>
              </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="carrito-navbar">
                <Link className="" to="/carrito">     
                   <i className="fas fa-shopping-cart fa-lg"></i>
                </Link>
            <div className="contadorProductos">
              <p>0</p>
            </div>
          </div> */}
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
