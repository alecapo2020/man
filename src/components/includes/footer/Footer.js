import React, { Fragment } from "react";
import './footer.css'

const Footer = () => {
  return (
    <Fragment>
      <a
        className="float-button"
        href="https://wa.link/6u3pwj"
      >
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
        <span>Escribenos...</span>
      </a>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-md-6 text-center logo-footer">
            <img
              src="https://www.manillasdecontrol.com/Resources/img/Logo-Manillas-de-control-acostado.png"
              className="img-fluid text-right"
              alt="Logo Manillas de Control"
            />
          </div>
          <div className="col-md-6 texto-footer">
            <h2>BPS SAS</h2>
            <p>
              
              
                <i className="fas fa-home"></i> Bogota: <a href="tel:3112887686"> 311 288 7686
              </a>
              
            </p>
            <p>
              <i className="fas fa-building"></i> Medellin: <a href="tel:3132925094"> 313 292 5094 </a>
            </p>
            <p>
              <i className="fas fa-envelope"></i> <a href="mailto:ventas@manillasdecontrol.com">ventas@manillasdecontrol.com</a>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
