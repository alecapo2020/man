import React, { Fragment } from 'react';

const Cotizacion = () => {
  return (
    <Fragment>
      <div className="container textomenumanillas">
      <h1>Solicitud de cotización formal</h1>
      <p><strong>Hola, por favor diligencia los datos completamente</strong></p>
      <strong className="parrafomenumanillas">Datos de la empresa:</strong>
      <div className="row py-3">
      <form action="" className="">
          <div class="row formulariocotizacion">
            <label htmlFor="" className="col-3">Razón social:</label>
            <input type="text" class="col-7 formulario" name="CotizaRazonSocial" id="" aria-describedby="helpId" placeholder=""/>    
            <label htmlFor="" className="col-3">NIT:</label>
            <input type="number" class="col-7 formulario" name="CotizaNit" id="" aria-describedby="helpId" placeholder=""/>        
            <label htmlFor="" className="col-3">Dirección:</label>
            <input type="text" class="col-7 formulario" name="CotizaDireccion" id="" aria-describedby="helpId" placeholder=""/>          
            <label htmlFor="" className="col-3">Teléfono:</label>
            <input type="number" class="col-7 formulario" name="CotizaTelefono" id="" aria-describedby="helpId" placeholder=""/>      
            <label htmlFor="" className="col-3">Correo:</label>
            <input type="email" class="col-7 formulario" name="CotizaCorreo" id="" aria-describedby="helpId" placeholder=""/>    
          </div>
        </form>
      <strong className="parrafomenumanillas">Datos del solicitante:</strong>
        <form action="" className="">
          <div class="row formulariocotizacion">
            <label htmlFor="" className="col-3">Nombre completo:</label>
            <input type="text" class="col-7 formulario" name="CotizaNombreContacto" id="" aria-describedby="helpId" placeholder=""/>    
            <label htmlFor="" className="col-3">Cargo:</label>
            <input type="text" class="col-7 formulario" name="CotizaCargoContacto" id="" aria-describedby="helpId" placeholder=""/>        
            <label htmlFor="" className="col-3">Teléfono:</label>
            <input type="number" class="col-7 formulario" name="CotizaTelefonoContacto" id="" aria-describedby="helpId" placeholder=""/>    
            <label htmlFor="" className="col-3">Correo:</label>
            <input type="email" class="col-7 formulario" name="CotizaCorreoContacto" id="" aria-describedby="helpId" placeholder=""/>    
          </div>
        </form>
        
      </div>
       
      <div className="text-center col-3 mx-auto">
              <button className="botoncarrito" type="submit">
                Enviar solicitud
              </button>
            </div>
      </div>
    </Fragment>
  )
}

export default Cotizacion
