import React, { Fragment } from 'react';

const Cotizacion = () => {
  return (
    <Fragment>
      <div className="container textomenumanillas">
      <h1>Solicitud de cotización formal</h1>
      <p><strong>Hola, por favor diligencia los datos completamente</strong></p>
      <strong className="parrafomenumanillas">Datos de la empresa:</strong>
      <div className="row">
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
        <strong className="parrafomenumanillas">Productos en los que esta interesado:</strong>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <select class="form-select">
                <option selected>Seleccione el producto</option>
                <option value="ManillasTyvek">Manillas Tyvek</option>
                <option value="ManillasPlasticas">Manillas Plasticas</option>
                <option value="ManillasSublimadas">Manillas Sublimadas</option>
                <option value="ManillasTejidas">Manillas Tejidas</option>
                <option value="ManillasHospitalarias">Manillas Hospitalarias</option>
                <option value="ManillasPlastisol">Manillas en Plastisol</option>
                <option value="Hologramas">Hologramas de seguridad</option>
              </select>
              <td>
                <label htmlFor="" className=""></label>
                <input type="number" className="col-3 formulario" name="CotizaUnoCantidad" id=""/>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <select class="form-select">
                <option selected>Seleccione el producto</option>
                <option value="ManillasTyvek">Manillas Tyvek</option>
                <option value="ManillasPlasticas">Manillas Plasticas</option>
                <option value="ManillasSublimadas">Manillas Sublimadas</option>
                <option value="ManillasTejidas">Manillas Tejidas</option>
                <option value="ManillasHospitalarias">Manillas Hospitalarias</option>
                <option value="ManillasPlastisol">Manillas en Plastisol</option>
                <option value="Hologramas">Hologramas de seguridad</option>
              </select>
              <td>
                <label htmlFor="" className=""></label>
                <input type="number" className="col-3 formulario" name="CotizaUnoCantidad" id=""/>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <select class="form-select">
                <option selected>Seleccione el producto</option>
                <option value="ManillasTyvek">Manillas Tyvek</option>
                <option value="ManillasPlasticas">Manillas Plasticas</option>
                <option value="ManillasSublimadas">Manillas Sublimadas</option>
                <option value="ManillasTejidas">Manillas Tejidas</option>
                <option value="ManillasHospitalarias">Manillas Hospitalarias</option>
                <option value="ManillasPlastisol">Manillas en Plastisol</option>
                <option value="Hologramas">Hologramas de seguridad</option>
              </select>
              <td>
                <label htmlFor="" className=""></label>
                <input type="number" className="col-3 formulario" name="CotizaUnoCantidad" id=""/>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <select class="form-select">
                <option selected>Seleccione el producto</option>
                <option value="ManillasTyvek">Manillas Tyvek</option>
                <option value="ManillasPlasticas">Manillas Plasticas</option>
                <option value="ManillasSublimadas">Manillas Sublimadas</option>
                <option value="ManillasTejidas">Manillas Tejidas</option>
                <option value="ManillasHospitalarias">Manillas Hospitalarias</option>
                <option value="ManillasPlastisol">Manillas en Plastisol</option>
                <option value="Hologramas">Hologramas de seguridad</option>
              </select>
              <td>
                <label htmlFor="" className=""></label>
                <input type="number" className="col-3 formulario" name="CotizaUnoCantidad" id=""/>
              </td>
            </tr>

            <tr>
              <th scope="row">5</th>
              <select class="form-select">
                <option selected>Seleccione el producto</option>
                <option value="ManillasTyvek">Manillas Tyvek</option>
                <option value="ManillasPlasticas">Manillas Plasticas</option>
                <option value="ManillasSublimadas">Manillas Sublimadas</option>
                <option value="ManillasTejidas">Manillas Tejidas</option>
                <option value="ManillasHospitalarias">Manillas Hospitalarias</option>
                <option value="ManillasPlastisol">Manillas en Plastisol</option>
                <option value="Hologramas">Hologramas de seguridad</option>
              </select>
              <td>
                <label htmlFor="" className=""></label>
                <input type="number" className="col-3 formulario" name="CotizaUnoCantidad" id=""/>
              </td>
            </tr>
  
          </tbody>
        </table>
 

          

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
