import React from "react";
import Impresion from "../impresion/Impresion";


const Producto = ({pedido}) => {
  


  return (
    <>
      <div className="row pb-5">
        {pedido.map((productoCarrito) => (
          <div className="col-md-12" key={productoCarrito.id}>
            <div className="row py-2 bordecarrito" >
              <div className="col-md-3 p-3">
                <img
                  className="img-fluid"
                  src="img/ManillasTyvek/Amarillo-bandera.webp"
                  alt="Tienda de compra"
                />
              </div>
              <div className="col-md-7 pt-2">
                <h3>{productoCarrito.nombre}</h3>
                <p>{productoCarrito.descripcion}</p>

                <div className="row ml-1 text-danger">
                  <h4>Impresión</h4>
                </div>

                <Impresion cantidad={productoCarrito.cantidad} id={productoCarrito.id}  />

                <div className="ml-1 mb-0 mt-3">
                  <h4 className="text-danger">Cantidad:</h4>
                  <p className="ml-3" id="cantidad">
                    {productoCarrito.cantidad}
                  </p>
                </div>
              </div>
              <div className="col-md-2 pt-2 cuerpovalor">
                <div id="valor">{productoCarrito.valor}</div>
              </div>

              <div className="ml-5 carritocuerpoeliminar">
                <p>Eliminar</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Producto;
