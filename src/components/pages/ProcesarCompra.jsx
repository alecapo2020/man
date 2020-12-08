import React, { Fragment } from "react";

const ProcesarCompra = () => {
  return (
    <Fragment>
      <div className="container pb-5">
        <form>
          <div className="bg-white p-5">
            <div className="row">
              <div className="col-md-2">
                <p>
                  <strong>Paso 1.</strong>
                </p>
              </div>
              <div className="col-md-10">
                <p>Revisa que tu pedido esté completo:</p>
                <p>
                  Cantidad: <strong>2000 unidades</strong>
                </p>
                <p>
                  Impresión: <strong>Si</strong>
                </p>
                <p>
                  Valor: <strong>$ 232.000</strong>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">
                <p>
                  <strong>Paso 2.</strong>
                </p>
              </div>
              <div className="col-md-10">
                <p>
                  Confirma tus datos: Si seleccionaste envío, se te despacharán
                  a esta dirección:
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-3">
                    <p>Nombres completos</p>
                  </div>
                  <div className="col-md-6">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="NombreCliente"
                        name="NombreCliente"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <p>Celular</p>
                  </div>
                  <div className="col-md-6">
                    <div class="form-floating mb-3">
                      <input
                        type="number"
                        class="form-control"
                        id="CelularCliente"
                        name="CelularCliente"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <p>Correo electrónico</p>
                  </div>
                  <div className="col-md-6">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="EmailCliente"
                        name="EmailCliente"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <p>Direccion de correspondencia</p>
                  </div>
                  <div className="col-md-6">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="DireccionCliente"
                        name="DireccionCliente"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <p>Ciudad</p>
                  </div>
                  <div className="col-md-6">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="CiudadCliente"
                        name="CiudadCliente"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 row">
                    <p>Desea recibir promociones?</p>
                    <div class="form-check ml-3 form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="ClientePromo"
                        id="inlineRadio1"
                        value="ClientePromo"
                        checked
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        Si
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="ClientePromo"
                        id="inlineRadio2"
                        value="ClientePromoNo"
                        
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <p>
                  <strong>Paso 3.</strong>
                </p>
              </div>
              <div className="col-md-11">
                <p>
                  Si tus manillas son impresas, adjunta los archivos necesarios.
                  (Puedes anexar varios archivos):
                </p>
                <small>
                  Necesitas ayuda adicional? Continua sin adjuntar los archivos,
                  y envíalos a ventas@manillasdecontrol.com
                </small>
                <div class="mb-3">
                  <input
                    class="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                    name="ArchivosCliente"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-1">
                <p>
                  <strong>Paso 4.</strong>
                </p>
              </div>
              <div className="col-md-11">
                <p>Continua con el proceso de compra en el portal de pagos:</p>
              </div>
            </div>

            <div className="text-center col-4 mx-auto">
              <button className="botoncarrito" type="submit">
                Ir al portal de pagos
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ProcesarCompra;
