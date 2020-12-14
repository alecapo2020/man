import React, { Fragment, useEffect } from "react";
import CarouselTyvek from "./CarouselTyvek";
import CarouselTyvek2 from "./CarouselTyvek2";
import './manillasTyvek.css';

const ManillasTyvek = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <Fragment>
      <div className="container p-5">
        <section className="tyvek-header">
          
         

          <div className="row">
            <div className="col-md-7 tyvek-1">
            <h1 className="TyvekTitulo"> Manillas de Papel Tyvek</h1>
            <hr/>
             
              <p>
                Las <strong> Manillas en Tyvek </strong>son elaboradas a partir de aleación de Nylon irrompible, cuentan con adhesivo de
                seguridad, el cual evita que las manillas para eventos se
                despeguen o se caigan. Esto, junto con su impresión impermeable,
                nos brindan una manilla de identificación ideal para una utilización maxima de
                aproximadamente 3 días.
              </p>
              <h2>Características</h2>

              <ul>
                <li> Material: Tyvek (Nylon Irrompible)</li>
                <li> Numeración Serial Consecutiva </li>
                <li> Adhesivo troquelado que maximiza su seguridad </li>
                <li> Impresión Impermeable de Alta Calidad </li>
                <li> Ajustable a la muñeca </li>
                <li> Apta para todo tipo de condiciones Climáticas</li>
              </ul>

              <h2>Colores</h2>
              <p>
                Los distintos colores en las{" "}
                <strong>manillas de identificación</strong> pueden sernos útiles
                por varias razónes, la primera, utilizar diferentes colores
                ayuda a prevenir que las personas que ingresaron el día 1 puedan
                ingresar el día 2 ya que tienen manillas de colores diferentes,
                la segunda razón, pueden servirnos para la{" "}
                <strong>identificación de grupos de personas</strong> (VIP,
                platino, General, Prensa, Staff, Producción, etc), la tercera
                razón, para hacer más llamativas las manillas para los usuarios
                finales y que no siempre utilicen la misma.
              </p>
              
            </div>

            <div className="col-md-5">
              <CarouselTyvek />
            </div>
          </div>
        </section>

        <div className="text-center my-4">
          <a href="/img/ManillasTyvek/Manillas-Tyvek.jpg">
            <button className="tyvek-button">
              Descarga el manual de uso{" "}
              <i className="fas fa-file-download" aria-hidden="true"></i>{" "}
            </button>
          </a>
        </div>

        <section>
          <div className="row">
            <div className="col-md-4 tyvek-2">
              <img
                className="img-fluid"
                src="/img/ManillasTyvek/Manillas1.webp"
                alt="Manillas Tyvek"
              />
              <h2>Hoteles y Piscinas</h2>

              <p>
                Si tienes un Hotel, Piscina o Balneario, con nuestras
                <strong> Manillas para eventos</strong>, tienes la seguridad de
                identificar fácilmente a las personas que tienen determinado
                régimen de alimentación y/o categoría, con el uso de los
                distintos y llamativos colores que tenemos disponibles para ti.
                Así podrás enfocar tu atención a determinadas personas.
              </p>
            </div>
            <div className="col-md-4 tyvek-2">
              <img
                className="img-fluid"
                src="/img/ManillasTyvek/ManillasTyvekEventos2.webp"
                alt="Manillas Tyvek"
              />
              <h2>Eventos y discotecas</h2>

              <p>
                Las <strong>Manillas de Papel Tyvek</strong> son la opción más
                económica para la identificación de personas en tu evento, bar ó
                discoteca. Ideales para periodos cortos de uso, cuentan con un
                alto nivel de seguridad, variedad de colores neón y pueden ser
                personalizadas de muchas formas.
              </p>
            </div>
            <div className="col-md-4 tyvek-2">
              <img
                className="img-fluid"
                src="/img/ManillasTyvek/ManillasTyvekParquesAcuaticos3.webp"
                alt="Manillas Tyvek"
              />
              <h2>Parques recreativos</h2>
              <p>
                Nuestras <strong>Manillas de Control</strong>, te ayudarán a
                llevar un registro de la cantidad de personas que ingresan a tu
                establecimiento, éstas pueden ser personalizadas con numeración
                consecutiva y/o desprendibles, para asegurar que quienes las
                portan hayan realizado el pago y hagan uso solamente de los
                servicios incluidos.
              </p>
            </div>
          </div>
        </section>
        <section></section>

        <section>
          <div className="row">
            <div className="col-md-6 tyvek-2">
              <h2>Impresión</h2>
              <p>
                El papel tyvek nos permite contar con
                <strong> Manillas Personalizadas</strong>, agregando el texto o
                logotipo que se ajuste a las necesidades de nuestros clientes.
                La impresión se puede realizar a una tinta o full color,
                dependiendo del gusto del cliente.
              </p>

              <h2>Calidad</h2>
              <p>
                Las <strong>Manillas de Papel Tyvek</strong> se dividen en sub
                grupos dependiendo del su gramaje, en nuestra empresa solo
                manejamos Tyvek de 68 gramos lo que se traduce en mayor calidad
                y duración, comparado con el estándar del mercado que maneja
                apenas 58 gramos.
              </p>

              <h2>Personalización</h2>
              <ul>
                <li>Numeración personzalizada adicional</li>
                <li>Código de barras</li>
                <li>Troqueles y cortes (ajustes para niños y jóvenes)</li>
              </ul>
            </div>
            <div className="col-md-6 tyvek-2">
              <CarouselTyvek2 />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ManillasTyvek;
