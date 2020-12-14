import React, { Fragment } from "react";

const CarouselTyvek = () => {
  return (
    <Fragment>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/ManillasTyvek/Amarillo-bandera.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Amarillo-Neon.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Fucsia-Neon.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Dorado.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Naranja-Neon.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Verde-Neon.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Verde-Biche.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Azul-Neon.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Caribbean-Blue.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Morado.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Gris.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Neon-Rojo.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/img/ManillasTyvek/Blanco.webp"
                className="d-block w-100"
                alt="carousel"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default CarouselTyvek;
