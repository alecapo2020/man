import React, { Fragment } from "react";

const ProcesarCompra = () => {
  return (
    <Fragment>
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-1">
            <p>
              <strong>Paso 1.</strong>
            </p>
          </div>
          <div className="col-md-11">
            <p>Revisa que tu pedido esté completo:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <p>Resumen del pedido:</p>
            <p>Cantidad: 2000 Unidades</p>
            <p>Valor: 232.000</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <p>
              <strong>Paso 2.</strong>
            </p>
          </div>
          <div className="col-md-11">
            <p>
              Confirma tus datos: Si seleccionaste envīo, se te despacharán a
              esta dirección:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <p>Nombres completos</p>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Juan Pérez"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <p>Teléfono celular</p>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="3XX-XXXXXXX"
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
                    id="floatingInput"
                    placeholder="nombre@ejemplo.com"
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
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Calle 1 # 1-1 apartamento 101"
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
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Bogotá, Cali, Medellin, etc."
                  />
                </div>
              </div>
            </div>

            <div className="row">
                <div className="col-md-3"></div></div>
                <div className="col-md-6">
                    <p>Desea recibir promociones?</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label class="form-check-label" for="inlineRadio1">Si</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label class="form-check-label" for="inlineRadio2">No</label>
                    </div>

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
              Si tus manillas son impresas, adjunta los archivos necesarios. (Puedes anexar varios archivos):
            </p>
            <small>Necesitas ayuda adicional? Continua sin adjuntar los archivos, y envíalos a ventas@manillasdecontrol.com</small>
            <div class="mb-3 rm-5">
                <label for="formFileMultiple" class="form-label">Seleccione sus archivos</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple/>
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
            <p>
              Continua con el proceso de compra en el portal de pagos:
            </p>
           
          </div>
        </div>
        
 
      </div>
    </Fragment>
  );
};

export default ProcesarCompra;
