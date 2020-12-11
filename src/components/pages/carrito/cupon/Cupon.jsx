import React from 'react'

const Cupon = () => {
    return (
        <>
             <label htmlFor="">Tienes un código de descuento?</label>
              <div className="row row-cols-lg-auto g-3 align-items-center py-3">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id="codigo"
                    placeholder="Ingresa tu código"
                  />
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary"
                  >
                    Validar
                  </button>
                </div>
              </div>
              <div id="mensajeCupon"></div>
        </>
    )
}

export default Cupon
