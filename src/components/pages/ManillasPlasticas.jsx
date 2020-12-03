import React, { Fragment } from "react";

const ManillasPlasticas = () => {
  return (
    <Fragment>
      <div className="container">
        <h1>Manillas Plasticas </h1>
        <h2>"Durables, seguras y personalizables."</h2>
        <section>
          <div className="row">
            <div className="col-md-6">
              <h2>Manillas de Identificacion plasticas </h2>
              <ul>
                <li>17 Colores Disponibes </li>
                <li>Duran hasta 15 dias de uso continuo </li>
                <li>Alta resistencia y durabilidad</li>
                <li>Impermeable (no se caen ni se borran con el agua)</li>
                <li>Manillas personalizadas y numerables</li>
              </ul>
              <h2>Especificaciones</h2>
              <ul>
                <li>largo de 25Cm</li>
                <li>Ancho de 16mm</li>
                <li>Area de Impresión: 10mm × 10cm</li>
                <li> Presentación :Hoja x 20 Unidades, Caja x 50 hojas</li>
              </ul>
              <h2>Personalización</h2>
              <ul>
                <li>numeración personaliza adicional</li>
                <li>código de barras o Qr</li>
                <li>Troqueles y cortes</li>
                <li>Impresión full color</li>
              </ul>
              <button className="btn btn-primary" />
            </div>
            <div className="col-md-6"></div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ManillasPlasticas;
