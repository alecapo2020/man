import React, { useState } from 'react'

const Envio = () => {
  
  const [envio, setEnvio]  = useState(0)

  const valorEnvio = (estado) => {
    const valorEnvio = 12000;
      if( estado === true ){
        setEnvio(valorEnvio)
      } else if ( estado === false ){
        setEnvio(0)
      }
  }  
  
  
  return (
        <>
             <div className="row row-cols-lg-auto">
                <p>Envio:</p>
                <div className="form-check ml-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    onChange={()=>{valorEnvio(true)}}
                  
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
                    value={false}
                    defaultChecked
                    onChange={()=>{valorEnvio(false)}}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
              </div>
        </>
    )
}

export default Envio
