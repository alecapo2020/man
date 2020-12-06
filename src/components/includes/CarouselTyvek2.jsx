import React, { Fragment } from 'react';

const CarouselTyvek2 = () => {
    return (
        <Fragment>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://www.manillasdecontrol.com/Resources/img/manillastyvek/Manillas%20marcadas%20Tyvek.jpg" className="d-block w-100" alt="carousel2"/>
                </div>
                <div className="carousel-item">
                <img src="https://www.manillasdecontrol.com/Resources/img/manillastyvek/Manillas%20Tyvek%20Impresas.jpg" className="d-block w-100" alt="carousel2"/>
                </div>
                <div className="carousel-item">
                <img src="https://www.manillasdecontrol.com/Resources/img/manillastyvek/Manillas%20tyvek%20codigo%20de%20barras.jpg" className="d-block w-100" alt="carousel2"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
            
        </Fragment>
    )
}


export default CarouselTyvek2
