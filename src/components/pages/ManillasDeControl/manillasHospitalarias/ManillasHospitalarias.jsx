import React, { Fragment,useEffect } from 'react'
import './manillasHospitalarias.css'

const ManillasHospitalarias = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <Fragment>
            <div className="container mb-3">
                <section className="hospital-header">
                    <img
                        className="img-fluid my-3"
                        src="/img/ManillasHospitalarias/BannerManillasHospitalarias.webp"
                        alt="Banner de entrada a la pagina de Manillas Hospitalarias"
                    />

                    <div className="row">
                        <div className="col-md hospitalarias-cuadro-1">
                            <img
                                className="img-fluid"
                                src="/img/ManillasHospitalarias/SeguridadManillasHospitalarias.webp"
                                alt="Manillas Hospitalarias seguridad"
                            />
                            <h2>Seguridad</h2>
                            <p>Las <strong>Manillas Hospitalarias</strong> ayudan a la identificación de los pacientes previniendo suplantaciones de identidad, garantizando su seguridad.</p>
                        </div>
                        <div className="col-md hospitalarias-cuadro-1">
                            <img
                                className="img-fluid"
                                src="/img/ManillasHospitalarias/ConfianzaManillasHospitalarias.webp"
                                alt="Manillas Hospitalarias confianza"
                            />
                            <h2>Confianza</h2>
                            <p>Puedes contar con las <strong>Manillas de identificación</strong> de pacientes. También tenemos <strong>Manillas Madre e Hijo</strong>, estas nunca se van a caer ni a borrar.</p>

                        </div>
                        <div className="col-md hospitalarias-cuadro-1">
                            <img
                                className="img-fluid"
                                src="/img/ManillasHospitalarias/TranquilidadManillasHospitalarias.webp"
                                alt="Manillas hospitalarias tranquilidad"
                            />
                            <h2>Tranquilidad</h2>
                            <p>Sobre las <strong>Manillas de identificación</strong> puedes escribir tipos de riesgos e información adicional para el tratamiento de cada paciente como: riesgo de caída, alergias, régimen de alimentación, entre otros.</p>
                        </div>

                    </div>
                </section>

                <section className="hospital-body my-3">
                    <div className="row">
                        <div className="col hospitalarias-cuadro-1">
                            <img
                                className="img-fluid"
                                src="/img/ManillasHospitalarias/AdultosManillasHospitalarias.webp"
                                alt="Manillas Hospitalarias"
                            />
                            <h2>Manillas Hospitalarias para adulto</h2>
                            <p>Las <strong>Manillas de seguridad hospitalarias</strong> para ADULTOS son elaboradas en PVC de alta resistencias, cuentan con un broche de seguridad que una vez cerrado solo podrá ser removido cortando la manilla. Con nuestras <strong>Manillas de identificación hospitalaria</strong>, tienes las seguridad de que no habrá suplantaciones de identidad.</p>
                        </div>

                        <div className="col">
                            <h2>Manillas Hospitalarias en Tyvek</h2>
                            <p>Estas <strong>Manillas de identificación</strong> vienen en variedad de colores, cuentan con un adhesivo troquelado de seguridad para garantizar que no sean reutilizadas, son ideales para cortos periodos de uso como durante el triage de urgencias.</p>

                            <h2>Manillas Hospitalarias en Plástico</h2>
                            <p>Son más duraderas, cuentan con un broche de seguridad que después de cerrado requiere ser cortado para remover la manilla, por lo que no puede ser transferida ni reutilizada y puede durar entre 15 y 30 días, ideales para pacientes de alta complejidad.</p>
                        </div>

                    </div>

                        <div className="row my-3">
                            <div className="col-md-6">
                                <img
                                    className="img-fluid"
                                    src="/img/ManillasHospitalarias/PersonalizacionManillasHospitalarias.webp"
                                    alt="Manillas Hospitalarias"
                                />
                            </div> 
                            <div className="col hospitalarias-cuadro-1">
                                <h2>Personalización</h2>
                                <p>Tanto las <strong>Manillas de papel Tyvek</strong> como las <strong>Manillas plásticas (PVC)</strong> pueden ser personalizadas para incluir logos y espacios con detalles del paciente, sobre estas se puede escribir con marcador permanente y la información no se borra ni se corre.</p>
                            </div>                     
                        </div>
                </section>

                <section className="hospital-footer">

                    <div className="row">
                        
                        <div className="col-md-3">
                            <img
                                className="img-fluid"
                                src="/img/ManillasHospitalarias/1.webp"
                                alt="Manillas Hospitalarias"
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                className="img-fluid"
                                src="/img/ManillasHospitalarias/2.webp"
                                alt="Manillas Hospitalarias"
                            />
                        </div>
                        <div className="col-md-3">
                            <img
                                className="img-fluid"
                                src="/img/ManillasHospitalarias/3.webp"
                                alt="Manillas Hospitalarias"
                            />
                        </div>
                         <div className="col-md-3">
                            <img
                                className="img-fluid"
                                src="/img/ManillasHospitalarias/4.webp"
                                alt="Manillas Hospitalarias"
                            />
                        </div>
                    </div>


                </section>


            </div>

        </Fragment>
    )
}

export default ManillasHospitalarias
