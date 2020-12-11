import React, { Fragment } from "react";
import Cupon from "./carrito/cupon/Cupon";
import Envio from "./carrito/envio/Envio";
import Producto from "./carrito/producto/Producto";
import pedido from "./carrito/pedido.json";

const Carrito = () => {
  return (
    <Fragment>
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

            <Producto pedido={pedido} />
          </div>

          <div className="col-md-3 bg-white ml-3 h-100 p-3">
            <form action="ProcesarCompra">
              <h2 className="ml-2 border-bottom">Resumen:</h2>
              <div className="row ml-1 mb-0">
                Subtotal: <div id="subtotal"></div>
              </div>
              <hr></hr>

              <Envio />

              <div className="row ml-1" id="value"></div>
              <hr></hr>
              <Cupon />

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
