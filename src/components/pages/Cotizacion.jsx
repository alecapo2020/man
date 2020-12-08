import React,{Fragment} from 'react'

const Cotizacion = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="textomenumanillas">
                    <h1>Solicitud de cotización formal</h1>
                    <p className="parrafomenumanillas">
                        Hola, por favor diligencia los datos completamente
                    </p>
                </div>
                
                    <strong>Datos de la empresa:</strong>
                    <form method="post">
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo:</label>
                <input
                  type="text"
                  className="form-control inp"
                  id="nombre"
                  name="nombre"
                  aria-describedby="Ingresa tu nombre"
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Producto">Producto:</label>
                    <select className="form-control inp" id="producto">
                      <option value='0'>- Seleccione -</option>
                      <option value=">Manillas-Tyvek">Manillas Tyvek</option>
                      <option value="Manillas-Plasticas">
                        Manillas Plasticas
                      </option>
                      <option value="Manillas-hospitalarias">
                        Manillas hospitalarias
                      </option>
                      <option value="Manillas-Bordadas">
                        Manillas Bordadas
                      </option>
                      <option value="Manillas-Silicona">
                        Manillas Silicona
                      </option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="cantidad">Cantidad de manillas</label>
                    <input
                      type="number"
                      className="form-control inp"
                      id="cantidad"
                      name="cantidad"
                      aria-describedby="Ingresa la cantidad"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="Celular">Celular:</label>
                <input
                  type="phone"
                  className="form-control inp"
                  id="celular"
                  name="celular"
                  aria-describedby="Ingresa tu celular"
                />
              </div>
              <div className="form-group">
                <label htmlFor="correo">Correo:</label>
                <input
                  type="email"
                  className="form-control inp"
                  id="correo"
                  name="correo"
                  aria-describedby="Ingresa tu correo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea
                  className="form-control inp"
                  id="mensaje"
                  name="mensaje"
                  placeholder="Dejanos tu solicitud aca."
                ></textarea>
              </div>
              <button className="btn btn-success btn-form" type="text">
                Enviar
              </button>
            </form>

                   
                
            </div>

        </Fragment>
        
    )
}

export default Cotizacion
