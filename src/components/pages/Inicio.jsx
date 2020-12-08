import React, { Fragment } from "react";
import {
  Link
} from "react-router-dom";

export const Inicio = () => {
  return (
    <Fragment>
      <div className="container manillastyvek">
       
       <section className="header pb-5">
          <div className="row">
            <div className="col-md-6">
              <h1>Manillas de Seguridad para <br/>
                Identificación y Eventos
              </h1>
              
              <p className="parrafo-header">
                En <strong> Manillas de Control</strong>, Encontraras las manillas ideales para
                controlar el ingreso a tus Eventos, Parques, Hoteles,
                Restaurantes, Bares, Conciertos, Piscinas, Hospitales entre
                otros. <br></br>
                Contamos con variedad de productos que se ajustan a su tipo de
                negocio y su presupuesto garantizandole siempre su entera
                satisfacción.
              </p>

              <h2>¿Quiénes somos?</h2>
              <p className="parrafo-header">
                Somos una empresa con experiencia de mas de 15 años, importadora
                y comercializadora mayorista con un amplio portafolio de
                productos para la identificacion y el control de ingreso
                especialmente a eventos. Gracias a que estamos ubicados en
                Bogotá, contamos con facilidades para realizar envios a nivel
                nacional e internacional con cortos tiempos de entrega.
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="/img/inicio/manillas-tyvek.webp"
                alt="Manillas tyvek"
              />
            </div>
            
            
          </div>
          <h3 className="mensaje-header">Manillas más seguras, más estéticas y más durables...</h3>
        </section>
      </div>

      <div className="parallax"> </div>

      <div className="container">
        <section>
          <div className="row py-5 parrafo-header header">
            <div className="col-md-4">
              <img
                className="img-fluid nuevafoto"
                src="img/inicio/Manillasparaeventos1.webp"
                alt="Manillas de Identificacion"
              />
              <br />
              <br />
              <h2>Manillas Papel Tyvek</h2>
              <br />
              <p>
                Con las <strong>Manillas en Papel Tyvek </strong>, Tendrás la
                facilidad de identificar y controlar el ingreso de las personas
                en tus eventos o establecimientos. Estas manillas son elaboradas
                en un material de seguridad llamado Tyvek, el cual es una
                aleación de nylon Irrompible de alta resistencia que incluyen un
                adhesivo el cual impide su transferencia. Las{" "}
                <strong>Manillas para eventos en bogota y medellin</strong> son
                perfectas para eventos de corta duracion de hasta máximo 3 dias.
              </p>
              <Link to="/productos/manillas-tyvek">
                <div className="text-center">
                  <button className="mb-3">
                    Ver Manillas Tyvek <i className="fas fa-align-justify"></i>
                  </button>
                </div>
                
              </Link>
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid nuevafoto"
                src="img/inicio/Manillasparaeventos2.webp"
                alt="Manillas para eventos bogota"
              />
              <br />
              <br />
              <h2>Manillas Plásticas con Broche</h2>
              <br />
              <p>
                Las <strong>manillas plásticas con broche</strong> de seguridad,
                son elaboradas en PVC de alta resistencia y cuentan con un
                broche de seguridad, lo cual impide que se caigan o rompan con
                el tiempo, convirtiéndola en una de las opciones de manilla más
                seguras y duraderas en el mercado. Tenemos disponibilidad de Las
                manillas plasticas en Medellin, Bogota, Cali, Perira entre
                Otras.{" "}
              </p>
              <Link to="/productos/manillas-plasticas">
                <div className="text-center">
                    <button className="mb-3">
                      Ver Manillas Plasticas
                      <i className="fas fa-align-justify ml-2"></i>
                    </button>
                  </div>
                </Link>
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid nuevafoto"
                src="img/inicio/Manillasparaeventos3.webp"
                alt="Manillas de seguridad Papel Tyvek"
              />
              <br />
              <br />
              <h2>Manillas de Identificación Hospitalarias</h2>
              <br />
              <p>
                Las <strong>manillas hospitalarias</strong> son especialmente
                diseñadas para controlar el ingreso y la identificación de
                pacientes a las <strong> entidades de salud</strong> ,
                permitiendo segmentar y/o diferenciar tipos de riesgos, alergias
                o patologías. Estas pueden ser en PVC plasticas, Madre e hijo o
                Tyvek (papel)
              </p>
              <Link to="/productos/manillas-hospitalarias">
                <div className="text-center">
                  <button className="mb-3">
                    Ver Manillas Hospitalarias{" "}
                    <i className="fas fa-align-justify"></i>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Inicio;
