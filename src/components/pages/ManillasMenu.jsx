import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ManillasMenu = () => {
  return (
    <Fragment>
      <form>
        <div className="container">
          <div className="textomenumanillas">
            <h1>Manillas para eventos</h1>
            <p className="parrafomenumanillas">
              Encuentra la manilla ideal para tu negocio!
            </p>
          </div>

          <div className="row">
            <div className="col-md-4">
              
                <Link to="/productos/manillas-tyvek">
                  <img
                    className="img-fluid menumanillas"
                    src="img/MenuManillas/1.webp"
                    alt="Hombre saliendo de piscina usando una manillas en tyvek"
                  />
                  
                </Link>
              
              
            </div>
            <div className="col-md-8">
              <Link to="/productos/manillas-plasticas">
                <img
                  className="img-fluid menumanillas"
                  src="img/MenuManillas/2.webp"
                  alt="Muestra en amarillo, oro, rosa y azul de varias Manillas de Identificacion en plastico "
                />
              </Link>
              <div className="row py-1">
                <div className="col-md-6">
                  <Link to="/productos/manillas-sublimadas">
                    <img
                      className="img-fluid menumanillas"
                      src="img/MenuManillas/3.webp"
                      alt="Muestra de Manillas sublimadas de Identificacion de color blanco"
                    />
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="/productos/manillas-tejidas">
                    <img
                      className="img-fluid menumanillas"
                      src="img/MenuManillas/4.webp"
                      alt="Muestra de manillas tejidas de Identificacion en color blanco"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="col-md-4">
              <Link to="/productos/manillas-hospitalarias">
                <img
                  className="img-fluid menumanillas"
                  src="img/MenuManillas/5.webp"
                  alt="Muestra de Manillas de Identificacion en color rojo para el uso en ambientes hospitalarios"
                />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/productos/manillas-plastisol">
                <img
                  className="img-fluid menumanillas"
                  src="img/MenuManillas/7.webp"
                  alt="Muestra de Manillas de Identificacion y recordatorios hechos en plastisol de diversos colores"
                />
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/productos/hologramas">
                <img
                  className="img-fluid menumanillas"
                  src="img/MenuManillas/6.webp"
                  alt="Muestra de hologramas de seguridad pegados y sin despegar"
                />
              </Link>
            </div>
          </div>
          <div className="text-center">
            <p className="parrafomenumanillas">
              Necesitas una cotización formal?
            </p>
          </div>

          <div className="text-center py-4">
            <Link to="/cotizacion">
              <div className="text-center">
                <button className="botoncotizacion" type="submit">
                  Solicitar cotización
                </button>
              </div>
            </Link>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ManillasMenu;
