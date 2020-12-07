import React, { Fragment } from "react";

const Carrito = () => {
  return (
    <Fragment>
      <div className="container pb-5 carritocuerpo">
        <div className="row">
          <div className="col-md-8 bg-white">
            <div className="row bordecarrito py-2">
              <div className="col-md-10">
                <h1>Carrito de compras</h1>
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
                    <div className="row">
                        <div className="col-md-10 cuerpocantidad">
                            <p>Cantidad:1000</p>
                        </div>
                       
                    </div>
                    
                  </div>
                  <div className="col-md-2 pt-2 cuerpovalor">
                    <p>$110.000</p>
                  </div>
                  
                    <div className="ml-5 carritocuerpoeliminar">
                            <p>Eliminar</p>
                    </div>
                        
                </div>

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
                    <div className="row">
                        <div className="col-md-10 cuerpocantidad">
                            <p>Cantidad:1000</p>
                        </div>
                       
                    </div>
                    
                  </div>
                  <div className="col-md-2 pt-2 cuerpovalor">
                    <p>$110.000</p>
                  </div>
                  
                    <div className="ml-5 carritocuerpoeliminar">
                            <p>Eliminar</p>
                    </div>
                        
                </div>

                <div className="row subtotal mr-2">
                    <p>Subtotal: $ 220.000</p>
                </div>

                        

                      
              </div>
              
            </div>
          </div>

          <div className="col-md ml-3 bg-white py-2">
            <h2>Subtotal</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Carrito;
