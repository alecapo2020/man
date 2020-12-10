import React, { Fragment } from "react";

const Cotizacion = () => {
  return (
    <Fragment>
      <div className="container pb-5">
        <div className="textomenumanillas">
          <h1>Solicitud de cotización formal</h1>
          <p className="parrafomenumanillas">
            Hola, por favor diligencia los datos completamente
          </p>
        </div>
        <form>
          <strong>Datos de la empresa:</strong>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <p>Razón social:</p>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="CotizaRazonSocial"
                      name="CotizaRazonSocial"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Nit:</p>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      class="form-control"
                      id="CotizaNit"
                      name="CotizaNit"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Dirección:</p>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="CotizaDireccion"
                      name="CotizaDireccion"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Teléfono:</p>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      class="form-control"
                      id="CotizaTelefono"
                      name="CotizaTelefono"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Correo:</p>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="CotizaEmail"
                      name="CotizaEmail"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <strong>Datos del solicitante:</strong>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <p>Nombre completo:</p>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="CotizaNombreContacto"
                      name="CotizaNombreContacto"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Cargo:</p>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="CotizaCargoContacto"
                      name="CotizaCargoContacto"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Teléfono:</p>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      class="form-control"
                      id="CotizaTelefonoContacto"
                      name="CotizaTelefonoContacto"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Correo:</p>
                </div>
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="CotizaEmailContacto"
                      name="CotizaEmailContacto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <strong>Producto de interés:</strong>

          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3">
                  <p>Producto</p>
                </div>
                <div className="col-md-6 mb-3">
                  <select className="form-control inp" id="CotizaProducto">
                    <option value='0'>- Seleccione -</option>
                    <option value=">Manillas-Tyvek">Manillas Tyvek</option>
                    <option value="Manillas Plasticas">
                      Manillas Plásticas
                    </option>
                    <option value="Manillas-hospitalarias">
                      Manillas Hospitalarias
                    </option>
                    <option value="Manillas-Bordadas">
                      Manillas Bordadas
                    </option>
                    <option value="Manillas-Silicona">
                      Manillas Silicona
                    </option>
                    <option value="Otro">
                      Otros
                    </option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>Mensaje:</p>
                </div>
                <div className="col-md-6 mb-3">
                  <textarea
                    className="form-control inp"
                    id="mensaje"
                    name="mensaje">
                  </textarea>
                </div>
              </div>
            </div>
          </div>
            
             
             
           
          <div className="text-center col-4 mx-auto">
            <button className="botoncarrito" type="submit">
              Enviar solicitud
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Cotizacion;
