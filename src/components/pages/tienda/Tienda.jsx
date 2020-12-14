import React, { Fragment, useEffect, useState } from "react";
import './tienda.css'

const Tienda = () => {
  const [Api, setApi] = useState([]);
  const [Carrito, setCarrito] = useState([]);
  const [Cant, setCantidad] = useState("");
  const [Precio, setPrecio] = useState("");

  useEffect(() => {
    peticionApi();
  }, []);

  const peticionApi = async () => {
    const urlApi = "http://jarvis.manillasdecontrol.com/api/products";
    const respuesta = await fetch(urlApi);
    const resultado = await respuesta.json();
    setApi(resultado);
  };

  const agregarCarrito = (i, Cant, Precio, e) => {
    e.preventDefault();
    const { nombre, idProducto, imagen } = i;
    setCarrito([
      ...Carrito,
      {
        nombre: nombre,
        id: idProducto,
        imagen: imagen,
        precio: Precio,
        cantidad: Cant,
      },
    ]);
    setCantidad("");
    setPrecio("");
    console.log("Agregado al carrito");
    let borrar = document.querySelectorAll(".cantidadd");
    borrar.forEach((i) => {
      i.value = "";
    });

    const algo = document.getElementById(idProducto);
    algo.innerHTML = "Ingresa Cantidad";

    mostrarCarrito([
      ...Carrito,
      {
        nombre: nombre,
        id: idProducto,
        imagen: imagen,
        precio: Precio,
        cantidad: Cant,
      },
    ]);
  };

  const inputCantidad = (inpCant, id) => {
    let precio = "";
    if (inpCant >= 1000) {
      precio = 110;
    } else if (inpCant >= 500 && inpCant < 1000) {
      precio = 140;
    } else if (inpCant < 500) {
      precio = 180;
    }
    const valor = inpCant * precio;
    setCantidad(inpCant);
    setPrecio(valor);
    const algo = document.getElementById(id);
    algo.innerHTML = valor;
  };

  const restar = (i) => {
    let a = document.getElementById(i.idProducto - 100).value;
    if (!a) {
      a = 0;
    }
    let inpCant = parseFloat(a) - 100;

    // Validamos la cantidad ingresada
    if (inpCant > 10000) {
      return;
    }

    // Configuramos el precio
    let precio = "";
    if (inpCant >= 1000) {
      precio = 110;
    } else if (inpCant >= 500 && inpCant < 1000) {
      precio = 140;
    } else if (inpCant < 500) {
      precio = 180;
    }
    const valor = inpCant * precio;

    // Agregamos al State para empujarlo al Carrito
    setCantidad(inpCant);
    setPrecio(valor);
    // Seteamos los campos con los ultimos valores obtenidos
    document.getElementById(i.idProducto).innerHTML = valor;
    document.getElementById(i.idProducto - 100).value = inpCant;
  };

  const sumar = (i) => {
    let a = document.getElementById(i.idProducto - 100).value;
    if (!a) {
      a = 0;
    }
    let inpCant = parseFloat(a) + 100;

    // Validamos la cantidad ingresada
    if (inpCant > 10000) {
      return;
    }

    // Configuramos el precio
    let precio = "";
    if (inpCant >= 1000) {
      precio = 110;
    } else if (inpCant >= 500 && inpCant < 1000) {
      precio = 140;
    } else if (inpCant < 500) {
      precio = 180;
    }
    const valor = inpCant * precio;

    // Agregamos al State para empujarlo al Carrito
    setCantidad(inpCant);
    setPrecio(valor);
    // Seteamos los campos con los ultimos valores obtenidos
    document.getElementById(i.idProducto).innerHTML = valor;
    document.getElementById(i.idProducto - 100).value = inpCant;
  };

  const mostrarCarrito = (Carrito) => {
    console.log(Carrito);
  };

  return (
    <Fragment>
      <div className="tienda-container">
        <section id="sidebar">
          <div className="row">
            <div className="col-md-2">
              <h4>Categorias</h4>
              <br />
              <ul className="categorias" id="categorias">
                <li>Manillas Tyvek</li>
                <hr />
                <li>Manillas Plasticas</li>
              </ul>
            </div>
            <div className="col-md-10">
              <div
                className="row row-cols-1 row-cols-lg-4 row-cols-md-3 nombre"
                id="nombre"
              >
                {Api.map((i) => (
                  <form action="" key={i.idProducto}>
                    <div className="col mb-4">
                      <div className="card">
                        <img
                          src={i.imagen}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">{i.nombre}</h5>
                          <p className="card-text">{i.descripcion}</p>

                          <label htmlFor="cantidadd">Cantidad:</label>
                          <div className="form-inline">
                            <div
                              className="menos"
                              id="resta"
                              onClick={() => {
                                restar(i);
                              }}
                            >
                              -
                            </div>
                            <input
                              type="number"
                              className="cantidadd input_cantidad"
                              name="cantidad"
                              onChange={(e) => {
                                inputCantidad(e.target.value, i.idProducto, i);
                              }}
                              id={i.idProducto - 100}
                              defaultValue=""
                            />
                            <div
                              className="mas"
                              data-id="hola"
                              id="suma"
                              onClick={() => {
                                sumar(i);
                              }}
                            >
                              +
                            </div>
                            <br />
                            <br />
                            <h5 className="valor">
                              Valor:
                              <div id={i.idProducto}>Ingresa Cantidad</div>
                            </h5>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={(e) => {
                              agregarCarrito(i, Cant, Precio, e);
                            }}
                          >
                            Agregar al Carrito
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
export default Tienda;
