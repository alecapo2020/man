import React, { Fragment,useEffect } from "react";
import './manillasPlasticas.css';

const ManillasPlasticas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="container pb-5">
        <section className="plastic-header">
          <h1>Manillas plásticas</h1>
          <h2 className="my-5">"Durables, seguras y personalizables."</h2>

          <img
            className="img-fluid"
            src="/img/ManillasPlasticas/ManillasPlasticasBanner.webp"
            alt="Manillas plásticas"
          />
        </section>
        <section>
          <div className="row my-3">
            <div className="col-md-6 plastic-1">
              <h2>Manillas de identificación</h2>
              <ul>
                <li>17 colores disponibles.</li>
                <li>Hasta 15 días de uso continuo.</li>
                <li>Alta resistencia y durabilidad.</li>
                <li>
                  Impermeables (no se caen ni se borran al contacto con el
                  agua).
                </li>
                <li>Manillas personalizadas y numerables</li>
              </ul>

              <h2>Especificaciones:</h2>
              <ul>
                <li>Largo de 25 cm.</li>
                <li>Ancho de 16 mm.</li>
                <li>Área de impresión de 10mm x 10cm</li>
                <li>Presentación: Hoja x 20 unidades, caja x 50 hojas</li>
              </ul>

              <h2>Personalización</h2>
              <ul>
                <li>Numeración personalizada adicional</li>
                <li>Códigos de barras o QR</li>
                <li>Troqueles y cortes (ajuste para niños y jóvenes)</li>
                <li>Impresión full color</li>
              </ul>
            </div>

            <div className="col-md-6">
              <img
                className="img-fluid"
                src="/img/ManillasPlasticas/ManillasPlasticasBeneficios.webp"
                alt="Manillas Plásticas"
              />
            </div>
          </div>
        </section>

        <section className="plastic-body">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="/img/ManillasPlasticas/ManillasCaraAncha.webp"
                alt="Manillas Plásticas"
              />
            </div>

            <div className="col-md-6">
              <img
                className="img-fluid"
                src="/img/ManillasPlasticas/ManillasCara-AnchaBanner.webp"
                alt="Manillas Plásticas"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 plastic-2">
              <img
                className="img-fluid"
                src="/img/ManillasPlasticas/Manillas-Cara-AngostaBanner.webp"
                alt="Manillas Plásticas"
              />
            </div>
            <div className="col-md-6 my-3 plastic-2">
              <div className="row">
                <h2>Las manillas plásticas sirven para:</h2>
                <div className="col-md-6">
                  <ul>
                    <li>Hoteles</li>
                    <li>Hospitales</li>
                    <li>Conciertos</li>
                    <li>Bares</li>
                    <li>Parques de diversiones</li>
                  </ul>
                </div>
                <div className="col-md-">
                  <ul>
                    <li>Eventos</li>
                    <li>Parques</li>
                    <li>IPS y EPS</li>
                    <li>Piscinas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row my-3">
            <div className="col">
              <img
                className="img-fluid"
                src="/img/ManillasPlasticas/ManillasPlasticasPiscina.webp"
                alt="Manillas Plásticas"
              />
            </div>

            <div className="col">
              <img
                className="img-fluid"
                src="/img/ManillasPlasticas/ManillasPlasticasEventos.webp"
                alt="Manillas Plásticas"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 plastic-2">
              <h2>Características</h2>
              <p>
                2cm ó 2.5cm de ancho x 27cm de largo; ajustable a la muñeca.
                Broche de Seguridad que impide la transferencia. Área de
                impresión personalizable. Variedad de colores. No se rompe ni se
                estira. Idel para todo tipo de condiciones climáticas (lluvia,
                sol, calor, mar, piscinas).
              </p>
              <p>
                Ideales para largos periodos de uso en hoteles, hospitales,
                parques acuáticos y más. Es cómoda y su broche de seguridad
                permite una fácil adaptación a cualquier tamaño de muñeca.
              </p>
            </div>

            <div className="col-md-6 plastic-2">
              <h2>Colores disponibles</h2>
              <p>
                Disponibles en gran variedad de colores: claros, oscuros y neón:
              </p>

              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>Rojo</li>
                    <li>Blanco</li>
                    <li>Naranja</li>
                    <li>Verde neón</li>
                    <li>Verde oscuro</li>
                    <li>Dorado</li>
                    <li>Blanco</li>
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul>
                    <li>Morado</li>
                    <li>Fucsia</li>
                    <li>Azul claro</li>
                    <li>Azul oscuro</li>
                    <li>Amarillo</li>
                    <li>Amarillo neón</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ManillasPlasticas;
