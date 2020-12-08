import React, { Fragment } from "react";

const Error404 = () => {
  return (
    <Fragment>
      <div className="tamano">a</div>
      <div className="error404">
        <div className="container p-5 col-5">
          <h1 className="text-center">Error 404 - Página no existe</h1>
          <div className="row py-5">
            <div className="col-md-6 text-right">
              <img
                src="https://www.manillasdecontrol.com/Resources/img/Logo-Manillas-de-control-acostado.png"
                alt=""
              />
            </div>
            <div className="col-md-6 text-left texto404">
              <h2>Ups! Algo salo mal...</h2>
              <p>
                La pagina que intentas acceder no existe. Por favor verifica la
                direccion URL o avisanos si el problema persiste.
              </p>
              <button className="btn btn-primary"> Reportar </button>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-success"> Regresar Al Inicio </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Error404;