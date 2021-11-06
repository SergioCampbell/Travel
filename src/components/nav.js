import React from 'react'

import './component.css'

export default function Nav() {
    return(
        <>
        <nav class="nav bg-info text-light">
        <img src="https://www.aviatur.com/version/1021/assets/aviatur_assets/img/header/aviatur-logo-gradient.svg?v=2" 
        alt="..." className="img-nav" />
            <a class="nav-link nav-btn text-light mx-1" href="#">Home</a>
            <a class="nav-link nav-btn text-light mx-1" href="#">Experiencias</a>
            <a class="nav-link nav-btn text-light mx-1" href="#">Contacto</a>
            <a class="nav-link mx-1 disabled">Login</a>
        </nav>
        </>
    )
}