import React, { Fragment } from "react";
import {
    Link
} from "react-router-dom";

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
            <img
              className="img-fluid menumanillas"
              src="img/MenuManillas/1.webp"
              alt="Manillas de Identificacion"
            />
          </div>
          <div className="col-md-8">
            <img
              className="img-fluid menumanillas"
              src="img/MenuManillas/2.webp"
              alt="Manillas de Identificacion"
            />
            <div className="row py-1">
              <div className="col-md-6">
                <img
                  className="img-fluid menumanillas"
                  src="img/MenuManillas/3.webp"
                  alt="Manillas de Identificacion"
                />
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid menumanillas"
                  src="img/MenuManillas/4.webp"
                  alt="Manillas de Identificacion"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-md-4">
            <img
              className="img-fluid menumanillas"
              src="img/MenuManillas/5.webp"
              alt="Manillas de Identificacion"
            />
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid menumanillas"
              src="img/MenuManillas/6.webp"
              alt="Manillas de Identificacion"
            />
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid menumanillas"
              src="img/MenuManillas/7.webp"
              alt="Manillas de Identificacion"
            />
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
