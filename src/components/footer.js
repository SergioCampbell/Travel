import React from 'react'

import './component.css'

export default function Footer() {
    return(
        <>
            <footer className="container-fluid">

           <div className="container mb-5">
           <h4 className="display-6">Únase a nuestra comunidad</h4>
                <ul className="nav justify-content-center mt-3">
                    <li className="nav-item bg-primary social">
                    <a className="nav-link" href="#" >
                    <i className="fab fa-2x fa-facebook text-light"></i></a>
                    </li> 
                    <li className="nav-item bg-primary social">
                        <a className="nav-link" className="nav-link" href="#">
                        <i className="fab fa-2x fa-twitter text-light"></i>
                        </a>
                    </li> 
                    <li className="nav-item bg-primary social">
                        <a className="nav-link" className="nav-link" href="#">
                        <i className="fab fa-2x fa-instagram text-light"></i>
                        </a>
                    </li> 
                    <li className="nav-item bg-primary social">
                        <a className="nav-link" className="nav-link" href="#">
                        <i className="fab fa-2x fa-linkedin text-light"></i>
                        </a>
                    </li> 
                    <li className="nav-item bg-primary social">
                        <a className="nav-link" className="nav-link" href="#">
                        <i className="fab fa-2x fa-youtube text-light"></i>
                        </a>
                    </li>
                </ul>
           </div>

                <div className="row ">

                    <div className="col">
                    <ul>
                        <li><a href="#"> Derechos del pasajero y/o deberes del transportador SIC</a></li>
                        <li><a href="#"> www.rues.org.co</a></li>
                        <li><a href="#"> Aerocivil</a></li>
                        <li><a href="#"> Contra la pornografía infantil</a></li>
                        <li><a href="#"> Denuncie situaciones que afectan a menores de 18 años</a></li>
                    </ul>
                        <p className="text-justify">
                        AVIATUR apoya el trabajo de UNICEF comprometiéndose con la protección de los 
                        derechos de las niñas, niños y adolescentes en Colombia y el mundo. Necesitamos 
                        también su compromiso. Invierta en el poder de los niños, el valor más rentable de Colombia.
                        </p>
                        <p className="text-justify">
                        Términos y condiciones del sitio - Política de privacidad y tratamiento de los datos personales 
                        - Formulario de reversión de pagos - Todos los derechos reservados Derecho de retracto y desistimiento, 
                        según Resolución 1209 del 5/25/2015 de la UAEAC.
                        </p>
                    </div>

                    <div className="col">
                        <ul>
                        <li><a href="#"><i className="fas fa-2x mb-3 text-primary fa-map-marker-alt"></i> Avenida 19 No. 4 - 62, Bogotá, Colombia</a></li>
                        <li><a href="#"><i className="far fa-2x mb-3 text-primary fa-envelope"></i> cliente.com@aviatur.com.co</a></li>
                        <li><a href="#"><i className="fas fa-2x mb-3 text-primary fa-phone"></i> Bogotá 3821616 - 5879640</a></li>
                        <li><a href="#"><i className="fab fa-2x mb-3 text-primary fa-whatsapp"></i> +5713821616</a></li>
                        <li><a href="#"><i className="far fa-2x mb-3 text-primary fa-question-circle"></i> 018000911555</a></li>
                        <li><a href="#"><i className="far fa-2x mb-3 text-primary fa-file-alt"></i> NIT: 860.000.018-2.</a></li>
                        <li><a href="#"><i className="far fa-2x mb-3 text-primary fa-building"></i> Agencia de viajes Aviatur SAS</a></li>
                        <li><a href="#"><i className="fas fa-2x mb-3 text-primary fa-check-circle"></i> Registro Nacional de Turismo No. 438.</a></li>
                        </ul>
                    </div>

                    <div className="col ">
                        <div className="row">
                            <div className="col col-sm-4">
                            <a href="#">
                                <img src="https://www.aviatur.com/version/1021/assets/aviatur_assets/img/footer/industriaComercio.png" 
                                alt="..." className="" />
                            </a>

                            <a href="#">
                                <img src="https://www.aviatur.com/version/1021/assets/aviatur_assets/img/footer/camaraComercio.png" 
                                alt="..." className="" />
                            </a>

                            <a href="#">
                                <img src="https://www.aviatur.com/version/7/assets/aviatur_assets/img/footer/iata.png" 
                                alt="..." className="" />
                            </a>
                            </div>

                            <div className="col col-sm-4">
                            <a href="#">
                                <img src="https://www.aviatur.com/version/1021/assets/aviatur_assets/img/footer/anato.png" 
                                alt="..." className="" />
                            </a>

                            <a href="#">
                                <img src="https://www.aviatur.com/version/1021/assets/aviatur_assets/img/footer/transporte.png" 
                                alt="..." className="" />
                            </a>

                            <a href="#">
                                <img src="https://www.aviatur.com/version/1021/assets/aviatur_assets/img/footer/aerocivil.png" 
                                alt="..." className="" />
                            </a>
                            </div>

                            <a href="#">
                                <img src="https://www.aviatur.com/version/1021/assets/aviatur_assets/img/footer/deskP2P.png" 
                                alt="..." className="large" />
                            </a>
                        </div>
                        
                    </div>

                </div>

                <div className="col">
                    <small> 2021 © Aviatur<br/>
                        Aviatur INC. - 6316 NW AVE DORAL, FL 33178 - 01 8000 911 555 
                    </small>
                </div>
            </footer>
        </>
    )
}