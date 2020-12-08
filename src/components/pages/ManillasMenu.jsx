import React, { Fragment } from "react";

const ManillasMenu = () => {
  return (
    <Fragment>
      <div className="container">
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
      </div>
    </Fragment>
  );
};

export default ManillasMenu;
