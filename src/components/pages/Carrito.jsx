import React, { Fragment } from "react";
import Cupon from "../logica/Cupon";

const Carrito = () => {

  const carritoConjunto = {
    valor: 0,
    impresion: 0,
    subtotal: 0,
    cupon: 0,
    envio: 0,
    total: 0,
    cantidad:0
  }

  


  let value = function () {
    const selector = document.getElementById("value");
    const selector1 = document.getElementById("flexRadioDefault1").checked;
    if (selector1 === true) {
      selector.innerHTML = 12000;
      let valor = selector.innerHTML;
      carritoConjunto.envio = 12000
      console.log(carritoConjunto)
      total(valor);
    } else if (selector1 === false) {
      let vacio = (selector.innerHTML = "");
      total(vacio);
      carritoConjunto.impresion = 0
    }
  };

  const total = (envio) => {
    const selector = document.getElementById("total");
    selector.innerHTML = `${envio}`;
    
  };

  const impresion = () => {
    const selector1 = document.getElementById("impresion1").checked;
    const cantidad = document.getElementById("cantidad").innerHTML;
    carritoConjunto.cantidad = parseInt(cantidad);
    
    if(selector1 === true){
      carritoConjunto.impresion = carritoConjunto.cantidad * 20;
      
      
    }
  }
  
  
  
  const calcular = () => {
    let valor = document.getElementById('valor').innerHTML;
    let subtotal = document.getElementById('subtotal');
    impresion()
    console.log(carritoConjunto.impresion)
    carritoConjunto.valor= parseInt(valor);
    subtotal.innerHTML = parseInt(valor) + carritoConjunto.impresion;
    
    carritoConjunto.subtotal= carritoConjunto.valor + carritoConjunto.envio + carritoConjunto.impresion
    
    const selector = document.getElementById("total");
    selector.innerHTML = carritoConjunto.subtotal
    
    console.log(carritoConjunto)
  }

 

  

  const validarCupon = (campo) => {
    const codigo = campo;
    const selector = document.getElementById("mensajeCupon");
    if (codigo === "tienda20") {
      selector.innerHTML = ` <p class="bg-success text-white text-center">el codigo que ingresaste fue aplicado</p>`;
    } else if (codigo === "") {
      selector.innerHTML = "";
    } else if (codigo !== "tienda20") {
      selector.innerHTML = `<p class="bg-danger text-white text-center">el codigo que ingresaste no es válido</p>`;
    }
  };
  function cambioCupon() {
    const campo = document.getElementById("codigo").value;
    validarCupon(campo);
  }
 
  return (
    <Fragment>
      <Cupon />
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-8 bg-white">
            <div className="row bordecarrito py-2">
              <div className="col-md-10">
                <h2>Carrito de compras</h2>
              </div>
              <div className="col-md-2">
                <h2>Valor</h2>
              </div>
            </div>

            <div className="row pb-5">
              <div className="col-md-12">
                <div className="row py-2 bordecarrito ">
                  <div className="col-md-3 p-3">
                    <img
                      className="img-fluid"
                      src="img/ManillasTyvek/Amarillo-bandera.webp"
                      alt="Tienda de compra"
                    />
                  </div>
                  <div className="col-md-7 pt-2">
                    <h3>
                      Manillas de Seguridad Tyvek 3/4" Color Amarillo Neon
                    </h3>
                    <p>
                      Manillas en papel Tyvek 3/4" (2cm de ancho) de alta
                      resistencia con adhesivo de seguridad color amarillo neon
                    </p>

                    <div className="row ml-1 text-danger">
                      <h4>Impresión</h4>
                    </div>

                    <div className="row">
                      <div className="form-check ml-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="impresion1"
                          id="impresion1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="impresion1"
                        >
                          Con impresión
                        </label>
                      </div>
                      <div className="form-check ml-1">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="impresion1"
                          id="impresion2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="impresion2"
                        >
                          Sin impresión
                        </label>
                      </div>
                    </div>

                    <div className="ml-1 mb-0 mt-3">
                      <h4 className="text-danger">Cantidad:</h4>
                      <p className="ml-3" id="cantidad">1000</p>
                    </div>
                  </div>
                  <div className="col-md-2 pt-2 cuerpovalor">
                    <div id="valor">110000</div>
                  </div>

                  <div className="ml-5 carritocuerpoeliminar">
                    <p onClick={ ()=>{calcular()}}>Eliminar</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="col-md-3 bg-white ml-3 h-100 p-3">
            <form action="ProcesarCompra">
              <h2 className="ml-2 border-bottom">Resumen:</h2>
              <div className="row ml-1 mb-0">
              Subtotal: <div id="subtotal"></div>
              </div>
              <hr></hr>
              <div className="row row-cols-lg-auto">
                <p>Envio:</p>
                <div className="form-check ml-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onClick={() => {
                      value();
                    }}
                    value={true}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Si
                  </label>
                </div>
                <div className="form-check ml-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    onClick={() => {
                      value();
                    }}
                    value={false}
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="row ml-1" id="value"></div>
              <hr></hr>

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
                    onClick={() => {
                      cambioCupon();
                    }}
                  >
                    Validar
                  </button>
                </div>
              </div>
              <div id="mensajeCupon"></div>

              <div className="row cols-auto ml-2">
                <p>Total:</p>
                <div id="total"></div>
              </div>
              <hr />

              <div className="text-center">
                <button className="botoncarrito" type="submit">
                  Procesar compra
                </button>
              </div>

              <hr></hr>
              <div className="row alerta ml-1 mr-1 p-3">
                <p>
                  Si tu pedido es con impresión, en el próximo paso podrás
                  adjuntar tus archivos.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carrito;
