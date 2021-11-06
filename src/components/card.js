import React from 'react'

import './component.css'
import Modal from './modal';

export default function Card() {    

    return(
        <div className="container">
            <section className="row row-cols-1 row-cols-md-4 g-4">
        <div className="card col col-sm-6 col-lg-4 shadow" >
             <img src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg" 
             className="card-img-top img-fx" alt="..." />
             <div className="card-body">
             <h4 className="card-title text-start text-muted">Vuelos <br/>
                 <strong className="text-dark">De Bogotá a Cancún</strong> <br/>
                 <span className="text-primary">por trayectoria</span>
             </h4>
                 <p className="card-text text-start h4 mt-5 mb-4">Desde <br/> <strong className="text-primary">COP 1.849.560 </strong> <br/>
                 por persona</p>
                 <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver oferta</button>
             </div>
             <Modal/>
        </div>

        <div className="card col col-sm-6 col-lg-4 shadow " >
             <img src="https://cdn.pixabay.com/photo/2021/10/02/09/18/airplane-6674689__340.jpg" 
             className="card-img-top img-fluid img-fx" alt="..." />
             <div className="card-body">
             <h4 className="card-title text-start text-muted">Vuelos <br/>
                 <strong className="text-dark">De Bogotá a Baltimore</strong> <br/>
                 <span className="text-primary">por trayectoria</span>
             </h4>
                 <p className="card-text text-start h4 mt-5 mb-4">Desde <br/> <strong className="text-primary">COP 2.500.560 </strong> <br/>
                 por persona</p>
                 <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver oferta</button>
             </div>
             <Modal/>
        </div>

        <div className="card col col-sm-6 col-lg-4 shadow " >
             <img src="https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522__340.jpg" 
             className="card-img-top img-fluid img-fx" alt="..." />
             <div className="card-body">
             <h4 className="card-title text-start text-muted">Vuelos <br/>
                 <strong className="text-dark">De Bogotá a Irlanda</strong> <br/>
                 <span className="text-primary">por trayectoria</span>
             </h4>
                 <p className="card-text text-start h4 mt-5 mb-4">Desde <br/> <strong className="text-primary">COP 3.849.560 </strong> <br/>
                 por persona</p>
                 <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver oferta</button>
             </div>
             <Modal/>
        </div>

        <div className="card col col-sm-6 col-lg-4 shadow " >
             <img src="https://cdn.pixabay.com/photo/2016/10/10/14/44/train-1728537__340.jpg" 
             className="card-img-top img-fluid img-fx" alt="..." />
             <div className="card-body">
             <h4 className="card-title text-start text-muted">Vuelos <br/>
                 <strong className="text-dark">De Medellín a Nueva Zelanda</strong> <br/>
                 <span className="text-primary">por trayectoria</span>
             </h4>
                 <p className="card-text text-start h4 mt-5 mb-4">Desde <br/> <strong className="text-primary">COP 3.849.248 </strong> <br/>
                 por persona</p>
                 <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver oferta</button>
             </div>
             <Modal/>
        </div>

        <div className="card col col-sm-6 col-lg-4 shadow " >
             <img src="https://cdn.pixabay.com/photo/2018/08/29/22/52/woman-3640935_960_720.jpg" 
             className="card-img-top img-fluid img-fx" alt="..." />
             <div className="card-body">
             <h4 className="card-title text-start text-muted">Vuelos <br/>
                 <strong className="text-dark">De Cali a Barranquilla</strong> <br/>
                 <span className="text-primary">por trayectoria</span> <br/>
                 Evento anual de otoño
             </h4>
                 <p className="card-text text-start h4 mt-5 mb-4">Desde <br/> <strong className="text-primary">COP 249.560 </strong> <br/>
                 por persona</p>
                 <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver oferta</button>
             </div>
             <Modal/>
        </div>

        <div className="card col col-sm-6 col-lg-4 shadow " >
             <img src="https://cdn.pixabay.com/photo/2018/03/27/15/04/women-3266211_960_720.jpg" 
             className="card-img-top img-fluid img-fx" alt="..." />
             <div className="card-body">
             <h4 className="card-title text-start text-muted">Vuelos <br/>
                 <strong className="text-dark">De Medellín a Santa Marta</strong> <br/>
                 <span className="text-primary">por trayectoria</span>
             </h4>
                 <p className="card-text text-start h4 mt-5 mb-4">Desde <br/> <strong className="text-primary">COP 149.560 </strong> <br/>
                 por persona</p>
                 <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver oferta</button>
             </div>
             <Modal/>
        </div>
        </section>
        </div>
    )
}