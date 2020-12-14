import React, { Fragment } from "react";
import './contacto.css'

export const Contacto = () => {
  
  
  function validarFormulario(e) {
    e.preventDefault();
    let errores = 6;

    // Validando Nombre
    const nombre = document.querySelector('#nombre');
    if(nombre.value.length < 5 | nombre.value.length > 55   ){
      nombre.classList.add('is-invalid');
    }else{
      errores-=1
      nombre.classList.remove('is-invalid');
      nombre.classList.add('is-valid');
    }

    // Validando Producto
    const producto = document.querySelector('#producto');
    if(producto.value.length < 2  ){
      producto.classList.add('is-invalid');
    }else{
      errores-=1
      producto.classList.remove('is-invalid');
      producto.classList.add('is-valid');
    }

    // Validando Cantidad
    const cantidad = document.querySelector('#cantidad');
    if(cantidad.value.length > 7 | cantidad.value.length === 0  ){
      cantidad.classList.add('is-invalid');
    }else{
      errores-=1
      cantidad.classList.remove('is-invalid');
      cantidad.classList.add('is-valid');
    }

    // Validando celular
    const celular = document.querySelector('#celular');
    if(celular.value.length !== 10   ){
      celular.classList.add('is-invalid');
    }else{
      errores-=1
      celular.classList.remove('is-invalid');
      celular.classList.add('is-valid');
    }

    // Validando Email
    // const correo = document.querySelector('#correo');
    // const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if(!correo.value.match(mailformat)   ){
    //   correo.classList.add('is-invalid');
    // }else{
    //   errores-=1
    //   correo.classList.remove('is-invalid');
    //   correo.classList.add('is-valid');
    // }


     // Validando Mensaje
     const mensaje = document.querySelector('#mensaje');
     if(mensaje.value.length < 10 |  mensaje.value.length >300  ){
       mensaje.classList.add('is-invalid');
     }else{
       errores-=1
       mensaje.classList.remove('is-invalid');
       mensaje.classList.add('is-valid');
     }
    
    if(errores>0){
      console.log("Hay errores"+errores)
    }else(
      console.log("No hay errores"+errores)
    )
  }
  
  
  return (
    <Fragment>
      <footer className="container py-5">
        <h1 className="contact-mensaje">
          Hola! <br /> Déjanos un mensaje...
        </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="pt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4111511965743!2d-74.04803638457527!3d4.69841424298401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ab11e76c491%3A0x5e5abe94d0240c2b!2zQ3JhLiAxNyAjMTE4LTMyLCBVc2FxdcOpbiwgQm9nb3TDoQ!5e0!3m2!1ses-419!2sco!4v1605562040647!5m2!1ses-419!2sco"
                width="100%"
                height="350"
                frameBorder="0"
                aria-hidden="false"
                tabIndex="0"
                title="Nuestra Ubicacion"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 borde-form p-4">
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
              <button className="btn btn-success btn-form" type="text" onClick={validarFormulario}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Contacto;
