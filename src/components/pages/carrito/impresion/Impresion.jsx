import React,{useState} from "react";

const Impresion = ({cantidad,id}) => {
  const [impresion, setImpresion] = useState(0)

  const valorImpresion = (estado) => {
    let valorImpresion = cantidad * 20;
    if (estado === true) {
      setImpresion(valorImpresion)
    } else if ( estado === false ) {
        setImpresion(0)
    }
  };

  return (
    <>
      <div className="row">
        <div className="form-check ml-3">
          <input
            className="form-check-input"
            type="radio"
            name={`impresion${id}`}
            id="true"
            onChange={() => {
              valorImpresion(true);
            }}
          />
          <label className="form-check-label" htmlFor="impresion1">
            Con impresión
          </label>
        </div>
        <div className="form-check ml-1">
          <input
            className="form-check-input"
            type="radio"
            name={`impresion${id}`}
            id="false"
            defaultChecked
            onChange={() => {
              valorImpresion(false);
            }}
          />
          <label className="form-check-label" htmlFor="impresion2">
            Sin impresión
          </label>
        </div>
      </div>
    </>
  );
};

export default Impresion;
