import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <a
        className="float-button"
        href="https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat/?lang=en"
      >
        <i className="fa fa-whatsapp" aria-hidden="true"></i>
        <span>Escribenos...</span>
      </a>
      <div className="container-fluid footer">
        <div className="row">
          <div className="col-6 text-right logo-footer">
            <img
              src="https://www.manillasdecontrol.com/Resources/img/Logo-Manillas-de-control-acostado.png"
              className="img-fluid text-right"
              alt="Logo Manillas de Control"
            />
          </div>
          <div className="col-6 texto-footer">
            <h2>BPS SAS</h2>
            <p>
              <i className="fas fa-home"></i> Bogota: 311 288 7686
            </p>
            <p>
              <i className="fas fa-building"></i> Medellin: 313 292 5094
            </p>
            <p>
              <i className="fas fa-envelope"></i> ventas@manillasdecontrol.com
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
